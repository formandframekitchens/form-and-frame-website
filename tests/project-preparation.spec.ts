import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';

test('independent fitting information precedes supplier choices and local enquiries retain their scope', async ({ page, request }, info) => {
  await page.goto('/kitchen-installation');
  await expect(page).toHaveTitle('Independent Kitchen Fitter Luton | Form & Frame');
  expect(await page.locator('#independent-fitting').evaluate(el => Boolean(el.compareDocumentPosition(document.querySelector('.services-hub-list-section')!) & Node.DOCUMENT_POSITION_FOLLOWING))).toBe(true);
  await page.screenshot({ path: info.outputPath('independent-fitting-first.png') });
  await page.getByRole('link', { name: 'see completed installation work', exact: true }).click();
  await expect(page.locator('#installation-evidence')).toBeVisible();
  await page.goto('/areas/dunstable');
  await expect(page.getByRole('heading', { name: 'See the installation details in our work' })).toBeVisible();
  const proof = page.getByRole('link', { name: /Follow the Surbiton kitchen installation/ });
  expect((await request.get((await proof.getAttribute('href'))!)).status()).toBe(200);
  await page.locator('#service-quote').getByRole('link', { name: 'Start my enquiry', exact: true }).click();
  await expect(page.locator('select[name="service"]')).toHaveValue('kitchen-installation');
  await expect(page.locator('select[name="installation"]')).toHaveValue('own-kitchen');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('joinery services are reachable before the portfolio and retain a typed enquiry', async ({ page, request }, info) => {
  await page.goto('/bespoke-joinery');
  const services = page.getByRole('navigation', { name: 'Bespoke joinery services', exact: true });
  await expect(services.getByRole('link')).toHaveCount(7);
  expect(await services.evaluate(el => Boolean(el.compareDocumentPosition(document.querySelector('.gallery-index')!) & Node.DOCUMENT_POSITION_FOLLOWING))).toBe(true);
  const destinations = await services.locator('a').evaluateAll(links => links.map(link => link.getAttribute('href')!));
  for (const href of destinations) {
    const response = await request.get(href);
    expect(response.status()).toBe(200);
    expect(await response.text()).toContain('Completed');
  }
  await page.screenshot({ path: info.outputPath('joinery-service-navigation.png') });
  await services.getByRole('link', { name: /Bespoke fitted wardrobes/ }).click();
  await page.getByRole('link', { name: /Discuss my project/ }).click();
  await expect(page.locator('select[name="service"]')).toHaveValue('bespoke-joinery');
  await expect(page.locator('select[name="joinery"]')).toHaveValue('wardrobes');
});

for (const [path, anchor, kind] of [['/kitchen-installation', '#fitting-checklist', 'kitchen'], ['/bespoke-joinery', '#joinery-brief', 'joinery']] as const) {
  test(`${kind} checklist saves useful preparation without submitting an enquiry`, async ({ page }, info) => {
    const sent: string[] = [];
    page.on('request', req => { if (/\/api\/enquiries|google-analytics\.com|googletagmanager\.com/.test(req.url())) sent.push(req.url()); });
    await page.goto(path + anchor);
    const section = page.locator(anchor);
    const boxes = section.getByRole('checkbox');
    await expect(boxes).toHaveCount(6);
    await boxes.nth(0).check();
    await boxes.nth(2).focus();
    await page.keyboard.press('Space');
    await expect(section).toContainText('2 of 6 items ready');
    const pending = page.waitForEvent('download');
    await section.getByRole('button', { name: /Save my checklist/ }).click();
    const download = await pending;
    expect(download.suggestedFilename()).toBe(`form-and-frame-${kind}-checklist.txt`);
    const content = await readFile((await download.path())!, 'utf8');
    expect(content).toContain('[x] Project location and access');
    expect(content).toContain('[ ] Photographs of the room');
    expect(content).toContain('does not submit an enquiry');
    await section.screenshot({ path: info.outputPath(`${kind}-checklist.png`) });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    expect(sent).toEqual([]);
    await section.getByRole('link', { name: /Send my .* enquiry/ }).click();
    await expect(page.locator('select[name="service"]')).toHaveValue(kind === 'kitchen' ? 'kitchen-installation' : 'bespoke-joinery');
  });
}

test('service navigation and preparation content remain available without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:3105/bespoke-joinery');
  await expect(page.getByRole('navigation', { name: 'Bespoke joinery services', exact: true }).getByRole('link')).toHaveCount(7);
  await expect(page.locator('#joinery-brief')).toContainText('Storage priorities');
  await page.locator('#joinery-brief').getByRole('link', { name: /Send my joinery enquiry/ }).click();
  await expect(page.locator('select[name="service"]')).toHaveValue('bespoke-joinery');
  await context.close();
});

test('storage news is attributed, crawlable and connected to independent fitting', async ({ page, request }, info) => {
  const path = '/news/under-sink-storage-fitting-checks';
  await page.goto(path);
  await expect(page.locator('h1')).toContainText('check the pipes');
  await expect(page.locator('figcaption')).toContainText('not an IKEA product photograph');
  await expect(page.locator('.news-article')).toContainText('not a newly announced launch');
  const image = page.locator('.news-article-image img');
  await image.scrollIntoViewIfNeeded();
  await image.evaluate((el: HTMLImageElement) => el.decode());
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: info.outputPath('storage-news.png'), fullPage: true });
  const html = await (await request.get(path)).text();
  expect(html).toContain('Keep the services accessible');
  expect(html).toContain('ai-under-sink-storage-planning.webp');
  expect(html).toContain('Article');
  const rss = await (await request.get('/news/feed.xml')).text();
  expect(rss).toContain(path);
  expect(rss).toContain('/news/ikea-dishwasher-front-compatibility');
  expect(await (await request.get('/sitemap.xml')).text()).toContain(path);
  await page.getByRole('link', { name: 'Independent kitchen installation and enquiry checklist' }).click();
  await expect(page.locator('#fitting-checklist')).toBeVisible();
});
