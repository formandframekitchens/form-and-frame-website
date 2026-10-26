import { expect, test } from '@playwright/test';

const categories = ['wardrobes','alcove-units','entertainment-units','under-stairs-storage','bookcases','office-furniture','unique-furniture'];

test('agreed labour rate exposes exclusions before a priced enquiry', async ({ page }, info) => {
  await page.goto('/kitchen-installation');
  await page.getByRole('link', {name:'See the labour scope and separate costs'}).click();
  const pricing = page.locator('#kitchen-fitting-prices');
  await expect(pricing).toContainText('£300');
  await expect(pricing).toContainText('No VAT added');
  await expect(pricing).toContainText('not the price of a complete kitchen installation');
  await expect(pricing).toContainText('Materials, waste disposal and other expenses are additional');
  await expect(pricing).toContainText('full kitchen removal and tiling');
  await expect(pricing).toContainText('three agreed days would be £900');
  await expect(pricing).toContainText('not an estimate that your kitchen will take three days');
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /£300\/day.*Materials and specialist work extra/);
  await pricing.screenshot({path:info.outputPath('agreed-day-rate.png')});
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await pricing.getByRole('link', {name:'Discuss my fitting price'}).click();
  await expect(page.locator('select[name="service"]')).toHaveValue('kitchen-installation');
  await expect(page.locator('select[name="installation"]')).toHaveValue('own-kitchen');
});

test('local pricing routes reach the same clear labour scope', async ({page}) => {
  for (const town of ['luton', 'dunstable']) {
    await page.goto(`/areas/${town}`);
    await page.locator('a[href="/kitchen-installation#kitchen-fitting-prices"]').click();
    await expect(page.locator('#kitchen-fitting-prices')).toBeInViewport();
    await expect(page.locator('#kitchen-fitting-prices')).toContainText('No VAT added');
  }
});

test('kitchen planning links connect evidence, scope and a correctly selected enquiry', async ({ page }, info) => {
  await page.goto('/kitchen-installation');
  await page.getByRole('navigation', {name:'Kitchen fitting information'}).getByRole('link', {name:'Plan the survey and responsibilities'}).click();
  const planning = page.locator('#planning-survey');
  await expect(planning).toBeVisible();
  await expect(planning.getByRole('heading', {level:3})).toHaveCount(4);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await planning.screenshot({path:info.outputPath('kitchen-planning.png')});
  await planning.getByRole('link', {name:'Surbiton kitchen case study'}).click();
  await expect(page).toHaveURL(/\/case-studies\/k01-surbiton\/kitchen$/);
  await expect(page.getByRole('heading', {level:1})).toBeVisible();
  await page.goBack();
  await page.locator('#planning-survey').getByRole('link', {name:'Discuss my installation scope'}).click();
  await expect(page.locator('select[name="service"]')).toHaveValue('kitchen-installation');
  await expect(page.locator('select[name="installation"]')).toHaveValue('own-kitchen');
});

test('every room brief is visible and preserves the enquiry context', async ({page},info) => {
  test.setTimeout(90_000);
  for (const slug of categories) {
    await page.goto(`/bespoke-joinery/${slug}#project-brief`);
    const brief = page.locator('#project-brief');
    await expect(brief.getByRole('heading', {level:3})).toHaveCount(3);
    await expect(brief).toContainText('Checking the finished work.');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), slug).toBe(true);
    await brief.screenshot({path:info.outputPath(`${slug}-brief.png`)});
    await brief.getByRole('link', {name:'See the completed project examples'}).click();
    await expect(page.locator('#completed-projects')).toBeInViewport();
    await brief.getByRole('link', {name:'Send my furniture brief'}).click();
    await expect(page.locator('select[name="service"]')).toHaveValue('bespoke-joinery');
    await expect(page.locator('select[name="joinery"]')).toHaveValue(slug);
  }
});

test('public service information and navigation remain readable without JavaScript', async ({ browser },info) => {
  const context = await browser.newContext({javaScriptEnabled:false,viewport:info.project.use.viewport});
  try {
    const page = await context.newPage();
    for (const route of ['/kitchen-installation',...categories.map(slug=>`/bespoke-joinery/${slug}`)]) {
      await page.goto(`http://127.0.0.1:3105${route}`);
      await expect(page.getByRole('heading',{level:1})).toHaveCount(1);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href',`https://formandframekitchens.co.uk${route}`);
      const brief = page.locator(route === '/kitchen-installation' ? '#planning-survey' : '#project-brief');
      await expect(brief.getByRole('heading',{level:2})).toBeVisible();
      await expect(brief.getByRole('link').first()).toHaveAttribute('href', /^(\/|#)/);
    }
  } finally {await context.close();}
});
