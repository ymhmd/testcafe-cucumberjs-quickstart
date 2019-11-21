var assert = require('assert');

exports.helpers = {
    validateRequestBodyIncludes: function (requestUrl, type, body) {
        this.validateRequestFires(requestUrl, type);

        const requestBody = this.filterRequestsByUrl(requestUrl, type);
        assert(requestBody.includes(body), 'Expected: ' + requestBody + ' to include: ' + body);
    },

    validateRequestFires: function (expectedUrl, expectedMethod) {
        for (var i = 0; i < globalRequestLogger.requests.length; i++) {
            const url = globalRequestLogger.requests[i].request.url;
            const method = globalRequestLogger.requests[i].request.method;
            if(((url.includes(expectedUrl)) === true) && (method === expectedMethod)) {
                return;
            }
        }
        assert(false, 'Request with URL: "' + expectedUrl + '" and Method: "' + expectedMethod + '" does not fire.');
    },

    validateNoRequestFires: function (expectedUrl, expectedMethod) {
        for (var i = 0; i < globalRequestLogger.requests.length; i++) {
            const url = globalRequestLogger.requests[i].request.url;
            const method = globalRequestLogger.requests[i].request.method;
            if(((url.includes(expectedUrl)) === true) && (method === expectedMethod)) {
                assert(false, 'Request with URL: "' + expectedUrl + '" and Method: "' + expectedMethod + '" fires.');
            }
        }
    },
    
    filterRequestsByUrl: function (expectedUrl, expectedMethod) {
        for (var i = 0; i < globalRequestLogger.requests.length; i++) {
            const url = globalRequestLogger.requests[i].request.url;
            const method = globalRequestLogger.requests[i].request.method;
            if(((url.includes(expectedUrl)) === true) && (method === expectedMethod)) {
                return globalRequestLogger.requests[i].request.body;
            }
        }
    }
};

exports.RequestMethods = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
    PATCH: 'patch'
}