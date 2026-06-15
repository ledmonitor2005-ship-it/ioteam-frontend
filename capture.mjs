import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const OUT_DIR = 'C:/Users/DELL/.gemini/antigravity-ide/brain/11524e33-1766-4dcb-87f7-4f4a3570999e';

async function capture() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const sizes = [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'mobile', width: 390, height: 844 }
  ];

  await page.goto('http://localhost:5174/', { waitUntil: 'networkidle0' });

  for (const size of sizes) {
    console.log(`Setting viewport to ${size.width}x${size.height}...`);
    await page.setViewport({ width: size.width, height: size.height });
    await new Promise(r => setTimeout(r, 1000));

    // Home
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(r => setTimeout(r, 500));
    const homePath = path.join(OUT_DIR, `screenshot_${size.name}_home.png`);
    await page.screenshot({ path: homePath });
    console.log(`Saved ${homePath}`);

    // Solutions (giai-phap)
    await page.evaluate(() => {
      const el = document.getElementById('giai-phap') || document.querySelector('section:nth-of-type(3)');
      if (el) el.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 1000));
    const solPath = path.join(OUT_DIR, `screenshot_${size.name}_solutions.png`);
    await page.screenshot({ path: solPath });
    console.log(`Saved ${solPath}`);

    // Projects (du-an)
    await page.evaluate(() => {
      const el = document.getElementById('du-an') || document.querySelector('section:nth-of-type(5)');
      if (el) el.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 1000));
    const projPath = path.join(OUT_DIR, `screenshot_${size.name}_projects.png`);
    await page.screenshot({ path: projPath });
    console.log(`Saved ${projPath}`);
  }

  await browser.close();
  console.log('Done!');
}

capture().catch(console.error);
