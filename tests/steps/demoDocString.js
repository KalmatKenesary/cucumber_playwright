const { Given, Before, After, world, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');

setDefaultTimeout(10000);

Before(async () => {
    world.browser = await chromium.launch({ headless: true });
    world.page = await world.browser.newPage();
});

After(async () => {
    await world.page.close();
    await world.browser.close();
})

Given('use this doc string', async (docStringJson) => {
    let docStringObject;
    try {
        docStringObject = JSON.parse(docStringJson);
    } catch(e) {
        console.log(e);
    }
    expect(docStringObject.name).toEqual('Alice');
});
