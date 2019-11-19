const Selector = require('testcafe').Selector;
const XPathSelector = require('./XPathSelector');
var {ClientFunction} = require('testcafe');

exports.helpers = {
    elementIsDisplayed: async function (xpath) {
        await testController.expect(Selector(XPathSelector(xpath)).with({boundTestRun: testController}).exists).ok();
    },

    elementIsNotDisplayed: async function (xpath) {
        await testController.expect(Selector(XPathSelector(xpath)).with({boundTestRun: testController}).exists).notOk();
    },

    getElementText: async function (xpath) {
        return await Selector(XPathSelector(xpath)).with({boundTestRun: testController}).innerText;
    },

    checkElementCount: async function(xpath, count){
        await testController.expect(Selector(XPathSelector(xpath)).with({boundTestRun: testController}).count).eql(count, 'element should have '+ count+' sub-elements');
    },

    validatePageUrl: async function (expectedUrl) {
        const getLocation = ClientFunction(() => document.location.href).with({boundTestRun: testController});
        await testController.expect(getLocation()).eql(expectedUrl);
    }
};

