import { expect, test } from '@playwright/test';
import { newsArticles, latestNewsArticles } from '../app/lib/news';
import { publicGalleryProjects } from '../app/lib/gallery-projects';
import { galleryEnquirySelection } from '../app/lib/gallery-catalog';
import { serviceAreas } from '../app/lib/service-coverage';

const sequence = '/news/kitchen-installation-timescale';
const pricing = '/news/comparing-kitchen-fitting-quotes';

test('expanded guide contents work without JavaScript and preserve real publication dates', async ({browser,request}, info) => {
  const context = await browser.newContext({javaScriptEnabled:false,reducedMotion:'reduce',viewport:info.project.use.viewport,baseURL:'http://127.0.0.1:3105'});
  try {
    const page = await context.newPage();
    await page.goto(sequence);
    const contents = page.getByRole('navigation',{name:'In this guide',exact:true});
    await expect(contents).toBeVisible();
    for(const id of ['site-survey','trade-coordination','handover-checklist']) {
      await contents.locator(`a[href="#${id}"]`).click();
      await expect(page.locator(`#${id} h2`)).toBeInViewport();
      expect(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    }
    await page.locator('#trade-coordination').screenshot({path:info.outputPath('trade-coordination.png')});
    await page.goto(pricing);
    await page.getByRole('navigation',{name:'In this guide',exact:true}).locator('a[href="#day-rate"]').click();
    await expect(page.locator('#day-rate')).toContainText('£300 per specialist per day, with no VAT added');
    await expect(page.locator('#day-rate')).toContainText('Two specialists cost £600 per agreed day');
    await expect(page.locator('#day-rate')).toContainText('charged separately');
    await expect(page.locator('#fixed-or-day-rate')).toContainText('not an estimate that your kitchen will take three days');
    await expect(page.locator('article')).not.toContainText('existing public portfolio example');
    await expect(page.locator('article')).toContainText('Howdens supplier imagery');
    await page.locator('#day-rate').screenshot({path:info.outputPath('pricing-guide.png')});
    for (const slug of ['kitchen-installation-timescale','comparing-kitchen-fitting-quotes']) {
      const article = newsArticles.find(a=>a.slug===slug)!;
      const html = await (await request.get(`/news/${slug}`)).text();
      const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
      const schema = schemas.find(s=>s['@type']==='Article');
      expect(schema.datePublished).toBe(article.publishedAt);
      expect(schema.datePublished).toMatch(/^2026-10-15/);
      expect(schema.dateModified).toBe(article.updatedAt);
      expect(schema.dateModified).toMatch(/^2026-10-25/);
    }
  } finally {await context.close();}
});

test('in-frame supply and independent fitting lead to different correct enquiries', async({page},info)=>{
  await page.goto('/in-frame-kitchens');
  await page.getByRole('link',{name:'Enquire about installation only'}).click();
  await expect(page.locator('select[name="service"]')).toHaveValue('kitchen-installation');
  await expect(page.locator('select[name="installation"]')).toHaveValue('in-frame-installation');
  await page.goBack();
  await page.locator('#service-quote').getByRole('link',{name:'Discuss my in-frame project'}).click();
  await expect(page.locator('select[name="service"]')).toHaveValue('in-frame-kitchens');
  await expect(page.locator('select[name="installation"]')).toHaveValue('design-supply-installation');
  await page.goto('/bespoke-kitchens');
  await expect(page.getByRole('heading',{name:'Have you already ordered your kitchen?'})).toBeVisible();
  await page.getByRole('link',{name:'See independent fitting and agreed labour prices'}).click();
  await expect(page.locator('#kitchen-fitting-prices')).toBeInViewport();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.screenshot({path:info.outputPath('independent-price-route.png')});
});

for(const supplier of ['magnet','wickes']) test(`${supplier} guidance is sourced and preserves supplier enquiry selection`, async({page},info)=>{
  await page.goto(`/kitchen-installation/${supplier}#supplier-planning`);
  const planning=page.locator('#supplier-planning');
  await expect(planning.getByRole('heading',{level:3})).toHaveCount(3);
  await expect(planning).toContainText('25 October 2026');
  expect(await planning.locator('a[href^="https://"]').count()).toBeGreaterThanOrEqual(2);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await planning.screenshot({path:info.outputPath(`${supplier}-planning.png`)});
  await page.locator('#service-quote').getByRole('link',{name:'Start my enquiry'}).click();
  await expect(page.locator('select[name="service"]')).toHaveValue('kitchen-installation');
  await expect(page.locator('select[name="supplier"]')).toHaveValue(supplier);
  await expect(page.locator('select[name="installation"]')).toHaveValue('own-kitchen');
});

test('public gallery routes and enquiry intent remain valid across the whole approved inventory',async({request})=>{
  test.setTimeout(120_000);
  for(const project of publicGalleryProjects) {
    const response=await request.get(`/gallery/${project.slug}`);
    expect(response.status(),project.slug).toBe(200);
    const html=await response.text();
    const selection=galleryEnquirySelection(project);
    const servicePath=selection.joinery?`/bespoke-joinery/${selection.joinery}`:`/${selection.service}`;
    expect(html,project.slug).toContain(`href="${servicePath}"`);
    expect(html,project.slug).toContain(`service=${selection.service}`);
    expect(html,project.slug).toContain(`https://formandframekitchens.co.uk/gallery/${project.slug}`);
    expect(html,project.slug).not.toContain('/api/private-case-studies/media/');
  }
});

test('all public coverage names match identity and service schema with a usable location enquiry',async({page,request})=>{
  await page.goto('/areas');
  const coverage=page.locator('#local-coverage');
  for(const place of serviceAreas) await expect(coverage).toContainText(place);
  for(const path of ['/areas','/kitchen-installation','/bespoke-joinery/wardrobes']) {
    const html=await(await request.get(path)).text();
    const schemas=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
    for(const schema of schemas.filter(s=>s['@type']==='Organization'||s['@type']==='Service')) expect(schema.areaServed).toEqual(serviceAreas);
  }
  await coverage.getByRole('link',{name:'Check your address and project with us'}).click();
  await expect(page.getByRole('textbox',{name:'Postcode / town',exact:true})).toHaveAccessibleDescription(/check the journey, access and visits/);
});

test('updated guides feed the three-card preview, RSS and sitemap without dropping older articles',async({page,request})=>{
  await page.goto('/');
  await expect(page.locator('.news-preview .news-card')).toHaveCount(3);
  for(const article of latestNewsArticles().slice(0,3)) await expect(page.locator(`.news-preview a[href="/news/${article.slug}"]`)).toBeVisible();
  const feed=await(await request.get('/news/feed.xml')).text();
  const sitemap=await(await request.get('/sitemap.xml')).text();
  for(const article of newsArticles) {
    expect(feed).toContain(`/news/${article.slug}`);
    expect(sitemap).toContain(`/news/${article.slug}`);
  }
  expect(sitemap).not.toContain('private-case-studies');
});
