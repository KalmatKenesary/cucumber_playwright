const { BeforeAll, AfterAll, Before, After } = require('@cucumber/cucumber');
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
    this.context = await browserInstance.newContext();
    this.page = await this.context.newPage();
});

After(async function () {
    await this.page.close();
    await this.context.close();
})
