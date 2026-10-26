import { expect, test } from "@playwright/test";
import { caseStudies, isCaseStudyPublished, k01Chapters, k01Drawings, k01Stages, k01Rooms, k01RoomHref } from "../app/lib/case-studies";

test("publication gate and complete finished-media coverage",()=>{
  const study=caseStudies[0];
  expect(isCaseStudyPublished(study)).toBe(true);
  expect(isCaseStudyPublished({...study,publicationApproved:false})).toBe(false);
  expect(isCaseStudyPublished({...study,status:"draft"})).toBe(false);
  expect(isCaseStudyPublished({...study,media:[{id:"missing",required:true}]})).toBe(false);
  expect(isCaseStudyPublished({...study,media:[{...study.media[0],asset:{...study.media[0].asset!,approved:false}}]})).toBe(false);
  const ids=k01Chapters.flatMap(ch=>ch.photos);
  expect(ids).toHaveLength(66); expect(new Set(ids).size).toBe(66);
  expect(k01Drawings.reduce((n,d)=>n+d.pageCount,0)).toBe(23);
  expect(k01Chapters.flatMap(ch=>ch.progress??[])).toHaveLength(13);
  expect(k01Chapters.find(ch=>ch.id==="kitchen")?.progress).toEqual(["P08","P12","P13"]);
  expect(k01Chapters.find(ch=>ch.id==="bedroom")?.progress).toEqual(["P17"]);
  expect(k01Chapters.find(ch=>ch.id==="under-stairs")?.progress).toEqual(["P18"]);
});

test("overview opens separate rooms with visible galleries and original drawing downloads",async({page,request},testInfo)=>{
  test.setTimeout(180_000);
  await page.goto('/case-studies/k01-surbiton');
  await expect(page.getByRole('heading',{level:1})).toHaveText('One home. Every detail connected.');
  const cards=page.getByRole('navigation',{name:'Explore the K01 rooms'}).locator('a');
  await expect(cards).toHaveCount(7);
  expect(await cards.evaluateAll(as=>as.map(a=>a.getAttribute('href')))).toEqual(k01Rooms.map(k01RoomHref));
  await expect(page.locator('main')).not.toContainText(/Arnas|Arnis|Vazinskas|Bazinskas/i);
  await expect(page.locator('video')).toHaveCount(0);
  await page.screenshot({path:testInfo.outputPath('overview.png')});
  const sitemap=await(await request.get('/sitemap.xml')).text();
  for(const chapter of k01Rooms){
    const href=k01RoomHref(chapter); expect(sitemap).toContain(href+'</loc>');
    await page.goto(href);
    await expect(page.getByRole('heading',{level:1})).toHaveText(chapter.label);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href','https://formandframekitchens.co.uk'+href);
    await expect(page.locator('main')).not.toContainText(/Arnas|Arnis|Vazinskas|Bazinskas/i);
    const journey=page.locator(`[data-room-journey="${chapter.id}"]`);
    await expect(journey.locator('details,[role="tab"],[hidden]')).toHaveCount(0);
    for(const stage of k01Stages(chapter)){
      const panel=page.locator(`#${chapter.id}-panel-${stage.id}`);
      await expect(panel).toBeVisible();
      const photos=panel.locator('button[aria-label^="Enlarge:"]');
      await expect(photos).toHaveCount(stage.photos.length);
      for(const photo of await photos.all())await expect(photo).toBeVisible();
      const srcs=await photos.locator('img').evaluateAll(imgs=>imgs.map(img=>new URL((img as HTMLImageElement).src).searchParams.get('url')));
      expect(new Set(srcs)).toEqual(new Set(stage.photos.map(p=>p.src)));
      if(stage.id==='site')expect(srcs).toEqual(stage.photos.map(p=>p.src));
    }
    for(const d of k01Stages(chapter).flatMap(s=>s.downloads??[])){
      const response=await request.get(d.src);expect(response.status()).toBe(200);
      expect(response.headers()['content-type']).toContain('application/pdf');
      expect((await response.body()).subarray(0,5).toString()).toBe('%PDF-');
    }
    await expect(page.getByRole('link',{name:'← All K01 rooms'})).toHaveAttribute('href','/case-studies/k01-surbiton');
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),href).toBe(true);
    if(chapter.id==='bedroom'){await page.locator('#bedroom-panel-site').scrollIntoViewIfNeeded();await page.locator('#bedroom-panel-site button img').evaluateAll(imgs=>Promise.all(imgs.map(img=>{const image=img as HTMLImageElement;image.loading="eager";return image.decode();})));await page.locator('#bedroom-panel-site').screenshot({path:testInfo.outputPath('wardrobe-before.png')});}
  }
  expect((await request.get('/case-studies/k01-surbiton/not-a-room')).status()).toBe(404);
});

test("finished photographs enlarge with keyboard access and web films play",async({page},testInfo)=>{
  test.setTimeout(90_000);
  const mediaRequests:string[]=[];page.on('request',req=>{if(req.url().endsWith('.mp4'))mediaRequests.push(req.url());});
  await page.goto('/case-studies/k01-surbiton/kitchen');
  const opener=page.locator('#kitchen-panel-finished button[aria-label^="Enlarge:"]').first();await opener.click();
  const dialog=page.locator('dialog[open]');await expect(dialog).toBeVisible();await expect(dialog).toContainText('1 / 23');
  await page.keyboard.press('ArrowRight');await expect(dialog).toContainText('2 / 23');
  await page.keyboard.press('Escape');await expect(dialog).toHaveCount(0);await expect(opener).toBeFocused();
  expect(mediaRequests).toHaveLength(0);
  await page.locator('#kitchen-panel-site').scrollIntoViewIfNeeded();await page.locator('#kitchen-panel-site button img').evaluateAll(imgs=>Promise.all(imgs.map(img=>{const image=img as HTMLImageElement;image.loading="eager";return image.decode();})));
  await page.locator('#kitchen-panel-site').screenshot({path:testInfo.outputPath('kitchen-site.png')});
  for(const route of ['/case-studies/k01-surbiton/kitchen','/case-studies/k01-surbiton/loft-dressing-room']){
    await page.goto(route); await expect(page.locator('video')).toHaveCount(route.endsWith('kitchen')?1:2);
    for(const video of await page.locator('video').all()){
      await video.evaluate(async el=>{const v=el as HTMLVideoElement;v.muted=true;await v.play();});
      await expect.poll(()=>video.evaluate(el=>(el as HTMLVideoElement).currentTime)).toBeGreaterThan(0);
      const dimensions = await video.evaluate(el => { const v=el as HTMLVideoElement; return [v.videoWidth,v.videoHeight]; });
      expect(Math.max(...dimensions)).toBeGreaterThanOrEqual(1280);
      expect(Math.min(...dimensions)).toBeGreaterThanOrEqual(714);
      await video.evaluate(el=>(el as HTMLVideoElement).pause());
    }
  }
});

test("K01 leads the portfolio and room enquiries select the right service",async({page})=>{
  await page.goto('/kitchens');await expect(page.locator('#kitchen-projects .gallery-card a').first()).toHaveAttribute('href','/case-studies/k01-surbiton/kitchen');
  await page.goto('/');await expect(page.locator('#projects .gallery-card')).toHaveCount(3);await expect(page.locator('#projects .gallery-card a').first()).toHaveAttribute('href','/case-studies/k01-surbiton');
  await page.goto('/internal-door-installation');await expect(page.getByRole('link',{name:'Explore the K01 internal-door case study'})).toBeVisible();
  for(const [url,service] of [['/case-studies/k01-surbiton','kitchen-installation'],['/case-studies/k01-surbiton/bedroom-wardrobe','bespoke-joinery'],['/case-studies/k01-surbiton-internal-doors','internal-door-installation']]){
    await page.goto(url);await page.locator('#service-quote a[href^="/contact?"]').click();
    await expect(page.locator('select[name="service"]')).toHaveValue(service);
    await expect(page.locator('textarea[name="message"]')).toHaveValue('I have seen the K01 case study and would like to discuss a project with Form & Frame.');
  }
});
