const { Given, When, Then, setDefaultTimeout, world } = require('@cucumber/cucumber');

setDefaultTimeout(10000);

Given('providing valid url', async function () {
    await world.page.goto('https://the-internet.herokuapp.com/login');
    console.log('Hello world');
});

Then('clicking login button', async function () {
    await world.page.locator('//button[@type="submit"]').click();
});

When('providing valid username as {string} and password as {string}', async function (name, password) {
    await world.page.locator('//input[@name="username"]').fill(name);
    await world.page.locator('//input[@name="password"]').fill(password);
});
