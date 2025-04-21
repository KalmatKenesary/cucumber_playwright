const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(10000);

Given('providing valid url', async function () {
    await this.page.goto('https://the-internet.herokuapp.com/login');
});

Then('clicking login button', async function () {
    await this.page.locator('//button[@type="submit"]').click();
});

When('providing valid username as {string} and password as {string}', async function (name, password) {
    await this.page.locator('//input[@name="username"]').fill(name);
    await this.page.locator('//input[@name="password"]').fill(password);
});
