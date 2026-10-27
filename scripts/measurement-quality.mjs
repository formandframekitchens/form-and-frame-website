export const POLICY_VERSION='2026-10-23+pricing-tag-2026-10-25';
const finite=(n)=>typeof n==='number'&&Number.isFinite(n)&&n>=0;
const norm=(s)=>String(s??'').normalize('NFKC').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,' ').trim().replace(/\s+/g,' ');
const hasPhrase=(text,phrase)=>(' '+text+' ').includes(' '+norm(phrase)+' ');
export function classifyQuery(query,places){
  const q=norm(query),towns=places.filter(t=>hasPhrase(q,t));
  const pricingIntent=/\b(costs?|prices?|quotes?|rates?|budget|affordable|cheap)\b|\bhow much\b/.test(q);
  let group='other';
  if(/\bform (?:and )?frame(?: kitchens)?\b|formandframekitchens/.test(q))group='business_brand';
  else if(/\b(howdens|wren|ikea|wickes|magnet|benchmarx|diy kitchens|b and q|b q)\b/.test(q))group='supplier_named';
  else if(/\bkitchens?\b/.test(q)&&(/\b(how|what|why|when|can|do|does|which|before|after|checklist|timescales?|costs?|quotes?)\b/.test(q)))group='kitchen_advice';
  else if(/\bkitchen (?:fitters?|fitting|installers?|installations?)\b/.test(q))group=towns.length?'generic_local_fitting':'generic_fitting_location_unverified';
  else if(/\bkitchens?\b/.test(q)&&towns.length)group='local_kitchen_supply_or_design';
  return {group,pricingIntent,towns,policyVersion:POLICY_VERSION};
}
function date(s){if(typeof s!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(s))return null;const n=Date.parse(s+'T00:00:00Z');return Number.isFinite(n)&&new Date(n).toISOString().slice(0,10)===s?n:null;}
function extractionDay(value,timezone){
  if(typeof value!=='string'||typeof timezone!=='string'||!timezone.trim())return null;
  const match=/^\d{4}-\d{2}-\d{2}T(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d{1,3})?)?(Z|[+-](?:0\d|1[0-4]):[0-5]\d)$/.exec(value);
  if(!match||date(value.slice(0,10))===null||/^[+-]14:(?!00)/.test(match[1]))return null;
  const instant=Date.parse(value);
  if(!Number.isFinite(instant))return null;
  try{
    const parts=Object.fromEntries(new Intl.DateTimeFormat('en-CA',{timeZone:timezone,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date(instant)).map(part=>[part.type,part.value]));
    return `${parts.year}-${parts.month}-${parts.day}`;
  }catch{return null;}
}
const stable=x=>JSON.stringify(canonical(x));
function canonical(x){if(Array.isArray(x))return x.map(canonical);if(x&&typeof x==='object')return Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])]));return x;}
function periodProblems(p,label){
  if(!p||typeof p!=='object'||Array.isArray(p))return [label+': period missing or malformed'];
  const errors=[],start=date(p.start),end=date(p.end),through=date(p.coverage?.dataThrough);
  const grouping=Array.isArray(p.grouping)?p.grouping:[];
  if(!p.metrics||typeof p.metrics!=='object'||Array.isArray(p.metrics))errors.push(label+': metrics must be a named object');
  if(start===null||end===null||end<start)errors.push(label+': invalid dates');
  if(!['gsc','ga4'].includes(p.source))errors.push(label+': source must be gsc or ga4');
  if(!['property','query_sample','page_query_diagnostic','events'].includes(p.scope))errors.push(label+': aggregation scope missing');
  if(!Array.isArray(p.grouping)||!p.grouping.length||new Set(p.grouping).size!==p.grouping.length)errors.push(label+': exact non-duplicate grouping required');
  if(!p.filters||typeof p.filters!=='object'||Array.isArray(p.filters)||!Object.keys(p.filters).length)errors.push(label+': filters missing');
  if(typeof p.timezone!=='string'||!p.timezone.trim())errors.push(label+': reporting timezone missing');
  if(p.coverage?.status!=='complete'||(typeof p.coverage?.evidence!=='string'||!p.coverage.evidence.trim())||through===null||end===null||through<end)errors.push(label+': complete-period coverage not established');
  const extractedDay=extractionDay(p.extractedAt,p.timezone);
  if(extractedDay===null)errors.push(label+': valid reporting timezone and explicitly zoned extraction timestamp required');
  else if(end===null||extractedDay<=p.end)errors.push(label+': extraction is before the complete period ends in its reporting timezone');
  if(p.source==='gsc'){
    if(p.includeFreshData!==false)errors.push(label+': unsettled/fresh data is not permitted in this comparison');
    if(p.scope==='property'&&grouping.some(k=>/query|page/i.test(k)))errors.push(label+': query/page grouping cannot be labelled property totals');
    if(p.scope==='query_sample'&&(!grouping.includes('query')||grouping.includes('page')))errors.push(label+': query sample requires query grouping without page');
    if(p.scope==='page_query_diagnostic'&&(!grouping.includes('query')||!grouping.includes('page')))errors.push(label+': page/query diagnostic needs both dimensions');
  }
  if(p.source==='ga4'&&p.qaExcluded!==true)errors.push(label+': QA exclusion not established');
  if(p.scope==='events'&&!p.eventName)errors.push(label+': event name missing');
  if(p.scope!=='property'&&!p.classificationVersion&&p.source==='gsc')errors.push(label+': query policy version missing');
  return errors;
}
export function comparePeriods(a,b){
  const reasons=[...periodProblems(a,'baseline'),...periodProblems(b,'comparison')];
  if(!a||!b||typeof a!=='object'||typeof b!=='object'||Array.isArray(a)||Array.isArray(b))return {comparable:false,reasons,metrics:null};
  for(const k of ['source','scope','timezone','eventName','classificationVersion'])if(stable(a[k])!==stable(b[k]))reasons.push(k+' differs between periods');
  if(stable(a.filters)!==stable(b.filters))reasons.push('filters differ between periods');
  if(stable((Array.isArray(a.grouping)?a.grouping:[]).slice().sort())!==stable((Array.isArray(b.grouping)?b.grouping:[]).slice().sort()))reasons.push('grouping differs between periods');
  const as=date(a.start),ae=date(a.end),bs=date(b.start),be=date(b.end);
  if([as,ae,bs,be].every(x=>x!==null)){
    if(ae-as!==be-bs)reasons.push('period lengths differ');
    if(!(ae<bs))reasons.push('periods overlap or are not in chronological order');
    if(a.source==='ga4'&&new Date(as).getUTCDay()!==new Date(bs).getUTCDay())reasons.push('GA4 weekday alignment differs');
  }
  if(a.scope==='events'||b.scope==='events'){
    const launched=date(a.instrumentedFrom),other=date(b.instrumentedFrom);
    if(launched===null||other!==launched||as===null||as<launched||bs===null||bs<launched)reasons.push('event instrumentation does not cover both periods');
  }
  const keys=new Set([...Object.keys(a.metrics??{}),...Object.keys(b.metrics??{})]);
  const metrics={};
  for(const key of keys){const av=a.metrics?.[key],bv=b.metrics?.[key];if(av!=null&&!finite(av)||bv!=null&&!finite(bv))reasons.push(key+': invalid metric value');
    const known=finite(av)&&finite(bv);metrics[key]={baseline:finite(av)?av:null,comparison:finite(bv)?bv:null,delta:known?bv-av:null,relativePercent:known&&av!==0?(bv-av)/av*100:null,direction:!known?'unavailable':av===bv?'unchanged':key==='averagePosition'?(bv<av?'lower-average-position':'higher-average-position'):(bv>av?'increased':'decreased')};}
  const comparable=reasons.length===0;
  return {comparable,reasons,metrics:comparable?metrics:null,limits:[a.scope==='property'?'Property-level grouping recorded.':'Visible query/event/diagnostic rows are not complete property totals.','Missing metrics stay null; no causal ranking or enquiry conclusion is produced.']};
}
export function summarizeQueryRows(rows,places,{grouping=['query'],rowLimit=null,truncated=false}={}){
  if(!Array.isArray(rows))return {valid:false,reason:'Rows must be an array.'};
  if(grouping.includes('page')||!grouping.includes('query')||truncated===true||rowLimit!==null&&rows.length>=rowLimit)return {valid:false,reason:'Use complete returned query-only rows; page rows or a reached limit need a separate diagnostic.'};
  if(!rows.length)return {valid:true,scope:'visible-query-sample',groups:null,pricingSlice:null,limits:'No returned rows: unavailable, not a measured zero.'};
  const seen=new Set(),groups={},pricing={clicks:0,impressions:0,weighted:0,positionComplete:true},townSlices={};
  const add=(obj,row)=>{obj.clicks+=row.clicks;obj.impressions+=row.impressions;if(row.impressions>0){if(finite(row.position))obj.weighted+=row.position*row.impressions;else obj.positionComplete=false;}};
  for(const row of rows){
    if(typeof row.query!=='string'||!finite(row.clicks)||!finite(row.impressions)||row.clicks>row.impressions||row.position!=null&&!finite(row.position))return {valid:false,reason:'Invalid or missing measured query metrics.'};
    if(grouping.some(k=>row[k]===undefined||row[k]===null))return {valid:false,reason:'A declared grouping dimension is missing.'};
    const key=stable(grouping.map(k=>row[k]));if(seen.has(key))return {valid:false,reason:'Duplicate aggregation key.'};seen.add(key);
    const c=classifyQuery(row.query,places);groups[c.group]??={clicks:0,impressions:0,weighted:0,positionComplete:true};add(groups[c.group],row);if(c.pricingIntent)add(pricing,row);
    if(c.group==='generic_local_fitting')for(const town of c.towns){townSlices[town]??={clicks:0,impressions:0,weighted:0,positionComplete:true};add(townSlices[town],row);}
  }
  const finish=({clicks,impressions,weighted,positionComplete})=>({clicks,impressions,ctr:impressions?clicks/impressions:null,averagePosition:impressions&&positionComplete?weighted/impressions:null});
  return {valid:true,scope:'visible-query-sample',policyVersion:POLICY_VERSION,groups:Object.fromEntries(Object.entries(groups).map(([k,v])=>[k,finish(v)])),pricingSlice:{...finish(pricing),overlapping:true},townSlices:Object.fromEntries(Object.entries(townSlices).map(([k,v])=>[k,finish(v)])),limits:'Suppressed/unreturned queries remain unknown. Pricing and town slices overlap and must not be added to group totals. Town wording is not searcher radius.'};
}
export function ownerOutcomes(record){
  const count=(v)=>Number.isInteger(v)&&v>=0?v:null;
  if(record?.confirmedByOwner!==true||date(record.asOf)===null)return {genuineEnquiries:null,qualifiedEnquiries:null,wonJobs:null,asOf:null};
  const genuine=count(record.genuineEnquiries),qualified=count(record.qualifiedEnquiries),won=count(record.wonJobs);
  if(genuine!==null&&qualified!==null&&qualified>genuine||qualified!==null&&won!==null&&won>qualified||genuine!==null&&won!==null&&won>genuine)throw new Error('Outcome stages are inconsistent.');
  return {genuineEnquiries:genuine,qualifiedEnquiries:qualified,wonJobs:won,asOf:record.asOf,source:'owner-confirmed record; not analytics clicks'};
}
