const { BeforeAll, AfterAll, Before, After, world } = require('@cucumber/cucumber');
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
    world.context = await browserInstance.newContext();
    world.page = await this.context.newPage();
});

After(async function () {
    await world.page.close();
    await world.context.close();
})
