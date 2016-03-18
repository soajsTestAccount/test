'use strict';

module.exports = {
    serviceName: 'test',
    serviceGroup: 'Test Group',
    servicePort: 5566,
    extKeyRequired: false,
    awareness: false,
    requestTimeout: 30,
    requestTimeoutRenewal: 5,
    src: {
        repo: 'test',
        owner: 'soajsTestAccount',
        main: '/index.js'
    },
    type: 'daemon',
    multi: null,
    prerequisites: {
        cpu: '',
        memory: ''
    }
};
