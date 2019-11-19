const fs = require('fs');

const execSync = require('child_process').execSync;

exports.CommonUtilities = {

    waitInSeconds: function (seconds) {
        seconds = seconds * 1000;
        const start = new Date().getTime();
        let end = start;
        while(end < start + seconds) {
            end = new Date().getTime();
        }
    },
    getTimeStampInMS: function () {
        return (new Date()).getTime();
    },
    executeCommandLine: async function (command) {
        let result = execSync(command, { encoding: 'utf-8' });
        return result;
    }
};