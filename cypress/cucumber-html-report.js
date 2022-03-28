var reporter = require('cucumber-html-reporter');
var options = {

        theme: 'bootstrap',

        jsonFile: 'cypress/cucumber-json',

        output: './reports/cucumber-htmlreport.htm',

        reportSuiteAsScenarios: true,

        scenarioTimestamp: true,

        launchReport: true,

        metadata: {

           "App Version":"0.3.2",

           "Test Environment":"Assignment Task",

           "Browser":"Chrome  99.0.2840.98",

           "Platform":"Windows 11",

           "Parallel":"Scenarios for Cancer Research UK App",

           "Executed":"Remote"

        }

    };
    reporter.generate(options);