exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['sample.js'],
    // Multi Browser Testing
    multiCapabilities: [{

        browserName: 'firefox'
    },
        {
            browserName: 'chrome'
        }

    ]
    // Mobile Testing Uncomment Below code to execute in Mobile

    /*capabilities: {

        browserName: 'chrome',

        platformName: 'Android',

        platformVersion: '7.0',

        deviceName: 'Android Emulator',

    },
    baseUrl: 'http://10.0.2.2:8000'*/
};