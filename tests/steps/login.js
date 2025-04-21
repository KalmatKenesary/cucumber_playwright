const { Given, When, Then, setDefaultTimeout, world } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

// let browser, page;
setDefaultTimeout(10000);

Given('providing valid url', async () => {
    world.browser = await chromium.launch({ headless: true });
    world.page = await world.browser.newPage();
    await world.page.goto('https://the-internet.herokuapp.com/login');
});

When('providing valid username and password', async () => {
    await world.page.locator('//input[@name="username"]').fill('tomsmith');
    await world.page.locator('//input[@name="password"]').fill('SuperSecretPassword!');
});

Then('clicking login button', async () => {
    await world.page.locator('//button[@type="submit"]').click();
    await world.page.close();
    await world.browser.close();
});

When('providing valid username as {string} and password as {string}', async (name, password) => {
    await world.page.locator('//input[@name="username"]').fill(name);
    await world.page.locator('//input[@name="password"]').fill(password);
});
