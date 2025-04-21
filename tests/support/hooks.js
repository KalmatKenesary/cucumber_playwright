const { BeforeAll, AfterAll, Before } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browserInstance;

BeforeAll(async () => {
  console.log('[BeforeAll] Launching browser...');
  browserInstance = await chromium.launch({ headless: true });
});

AfterAll(async () => {
  console.log('[AfterAll] Closing browser...');
  await browserInstance.close();
});

Before(async function () {
  const context = await browserInstance.newContext();
  this.page = await context.newPage();
});
