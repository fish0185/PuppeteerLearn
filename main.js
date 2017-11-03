'use strict';

const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 2500 // slow down by 250ms
  });
  const page = await browser.newPage();
  await page.goto('http://localhost/test/');
  // here console is backend console.
  page.on('console', msg => console.log('PAGE LOG:', ...msg.args));
  // here console is doing job on Chromium 
  await page.evaluate(() => console.log(`url is ${location.href}`));
  await page.screenshot({path: 'google.png'});
  await browser.close();
})();