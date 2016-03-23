'use strict';

var test1 = require('../someFile');
var test2 = require('../anotherFile'),
    test3 = require('../lastFile');

module.exports = {
    serviceName: 'test',
    serviceGroup: 'Test Group',
    servicePort: 6709,
    requestTimeout: 30,
    requestTimeoutRenewal: 5,
    src: {
        repo: 'test',
        owner: 'soajsTestAccount',
        main: '/index.js'
    },
    versions: {
        "1": {
            "extKeyRequired": true,
            "awareness": false,
            "apis": [
                {
                    "l":" Start",
                    "v": "/start"
                }
            ]
        }
    },
    type: 'daemon',
    multi: null,
    prerequisites: {
        cpu: '',
        memory: ''
    }
};
