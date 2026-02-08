import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    deviceScaleFactor: 2,
    viewport: { width: 1200, height: 630 },
  });

  const page = await context.newPage();
  await page.goto("file://" + process.cwd() + "/template.html");
  await page.waitForTimeout(1000);

  await page.screenshot({
    path: "images/og.png",
    type: "png",
  });

  await browser.close();
  console.log("OG image generated");
})();
