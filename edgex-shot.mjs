import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
for (const [name, path, scroll] of [['home','/',0],['home-mid','/',2200],['home-low','/',5200],['about','/about',0],['contact','/contact',0]]) {
  await page.goto('http://localhost:3199' + path, { waitUntil: 'load', timeout: 20000 });
  await page.waitForTimeout(1000);
  if (scroll) { await page.evaluate(s => window.scrollTo(0, s), scroll); await page.waitForTimeout(900); }
  await page.screenshot({ path: `/tmp/edgex-${name}.png` });
}
await browser.close();
