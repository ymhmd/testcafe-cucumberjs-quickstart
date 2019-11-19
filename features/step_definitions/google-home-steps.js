require('dotenv').config();
var {Given, Then} = require('cucumber');

const Utils = require('../common/utilities/CommonUtilities');
const XPathSelector = require('../common/utilities/XPathSelector');
const ObjectIdentifiers = require('../common/resources/objects.json');
const TestCafeHelpers = require('../common/utilities/TestCafeHelpers');
const TestData = require('../common/resources/testData');

//Locators
const searchField = ObjectIdentifiers.googleHomePage.searchTextFieldXpath;

Given(/^User enter "([^"]*)" as search text$/, async function (searchText) {
    await testController.typeText(XPathSelector(searchField), searchText);
});
Then(/^Click search button$/, async function () {
    await testController.pressKey('enter');
});
Given(/^User navigates to google home page$/, async function () {
    await testController.navigateTo(TestData.googleHomePage);
});