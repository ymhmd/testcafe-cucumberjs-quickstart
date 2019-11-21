require('dotenv').config();
var {Given, Then} = require('cucumber');

const Utils = require('../common/utilities/CommonUtilities');
const XPathSelector = require('../common/utilities/XPathSelector');
const ObjectIdentifiers = require('../common/resources/objects.json');
const TestCafeHelpers = require('../common/utilities/TestCafeHelpers');
const TestCafeHeInterceptor = require('../common/utilities/TestCafeNetworkInterceptor');
const TestData = require('../common/resources/testData');

//Locators
const {
    usernameFieldXpath,
    passwordFieldXpath,
    loginButtonXpath
} = ObjectIdentifiers.githubLoginPage;

Given(/^User navigates to github login page$/, async function () {
    await testController.navigateTo(TestData.githubLoginPage);
});

Given(/^User enters (.*) as username and (.*) as password$/, async function (username, password) {
    await testController.typeText(XPathSelector(usernameFieldXpath), username);
    await testController.typeText(XPathSelector(passwordFieldXpath), password);
});

Then(/^Click login button$/, async function () {
    await testController.click(XPathSelector(loginButtonXpath));
});

Then(/^Validate (.*) and (.*) are exist in the request body$/, async function (username, password) {
    const url = "https://github.com/session";
    const type = TestCafeHeInterceptor.RequestMethods.POST;
    const emailBody = '&login=' + encodeURIComponent(username) + '&';
    const passwordBody = '&password=' + encodeURIComponent(password) + '&';

    TestCafeHeInterceptor.helpers.validateRequestBodyIncludes(url, type, emailBody);
    TestCafeHeInterceptor.helpers.validateRequestBodyIncludes(url, type, passwordBody);
});