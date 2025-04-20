// import { Given, When, Then } from '@cucumber/cucumber';
const { Given, When, Then } = require('@cucumber/cucumber');

Given('checking demo', function () {
    console.log('GIVEN');
});

When('print some message', function () {
    console.log('WHEN');
});

Then('result values', function () {
    console.log('THEN');
});
