import { expect, test } from '@playwright/test';
import { homepageKitchenSlides } from '../app/lib/home-carousel';

test('hero defers invisible photographs and keeps a loaded image during slow navigation', async ({page},testInfo)=>{
  await page.emulateMedia({reducedMotion:'reduce'});
  let release:()=>void=()=>{};
  const waitForImage=new Promise<void>(resolve=>{release=resolve;});
  await page.route('**/_next/image?**',async route=>{
    if(new URL(route.request().url()).searchParams.get('url')===homepageKitchenSlides[1].src)await waitForImage;
    await route.continue();
  });
  await page.goto('/');
  const carousel=page.locator('.kitchen-carousel');
  await expect(carousel.locator('img')).toHaveCount(1);
  await expect.poll(()=>carousel.locator('.is-active img').evaluate(e=>(e as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  await carousel.getByRole('button',{name:'Next project image',exact:true}).click();
  await expect(carousel).toHaveAttribute('aria-busy','true');
  await expect(carousel.locator('.is-active img')).toHaveAttribute('alt',homepageKitchenSlides[0].alt);
  release();
  await expect(carousel.locator('.is-active img')).toHaveAttribute('alt',homepageKitchenSlides[1].alt);
  await expect(carousel).toHaveAttribute('aria-busy','false');
  await carousel.getByRole('button',{name:'Previous project image',exact:true}).click();
  await expect(carousel.locator('.is-active img')).toHaveAttribute('alt',homepageKitchenSlides[0].alt);
  await carousel.getByRole('button',{name:`Show image 4: ${homepageKitchenSlides[3].caption}`,exact:true}).click();
  await expect(carousel.locator('.is-active img')).toHaveAttribute('alt',homepageKitchenSlides[3].alt);
  await expect(carousel.locator('img')).toHaveCount(3);
  await page.screenshot({path:testInfo.outputPath('hero-selected.png')});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});

test('slideshow autoplay, pause, failed-image and reduced-motion behaviour remain usable',async({page})=>{
  await page.clock.install();
  await page.goto('/');
  const carousel=page.locator('.kitchen-carousel');
  await expect.poll(()=>carousel.locator('.is-active img').evaluate(e=>(e as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  await page.clock.fastForward(5300);
  await expect(carousel.locator('.is-active img')).toHaveAttribute('alt',homepageKitchenSlides[1].alt);
  await carousel.getByRole('button',{name:'Pause slideshow',exact:true}).click();
  await page.mouse.move(0,0);await page.locator('h1').click();
  await page.clock.fastForward(11000);
  await expect(carousel.locator('.is-active img')).toHaveAttribute('alt',homepageKitchenSlides[1].alt);
  await page.route('**/_next/image?**',async route=>new URL(route.request().url()).searchParams.get('url')===homepageKitchenSlides[2].src?route.abort():route.continue());
  await carousel.getByRole('button',{name:'Next project image',exact:true}).click();
  await expect(carousel).toHaveAttribute('aria-busy','false');
  await expect(carousel.locator('.is-active img')).toHaveAttribute('alt',homepageKitchenSlides[1].alt);
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.goto('/');await page.clock.fastForward(11000);
  await expect(page.locator('.kitchen-carousel img')).toHaveCount(1);
  await expect(page.getByRole('button',{name:'Pause slideshow',exact:true})).toHaveCount(0);
});

test('first photograph and kitchen enquiry remain available without JavaScript',async({browser},testInfo)=>{
  const context=await browser.newContext({javaScriptEnabled:false,baseURL:String(testInfo.project.use.baseURL),viewport:testInfo.project.use.viewport});
  try{const page=await context.newPage();await page.goto('/');
    await expect(page.locator('.kitchen-carousel img')).toHaveCount(1);
    await expect.poll(()=>page.locator('.kitchen-carousel img').evaluate(e=>(e as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    await page.goto('/kitchen-installation');await page.getByRole('link',{name:'Send your kitchen plans',exact:false}).click();
    await expect(page.locator('select[name="service"]')).toHaveValue('kitchen-installation');
    await expect(page.locator('select[name="installation"]')).toHaveValue('own-kitchen');
  }finally{await context.close();}
});
