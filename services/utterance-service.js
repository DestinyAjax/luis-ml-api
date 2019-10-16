require('dotenv').config();
const request = require('requestretry');
const querystring = require('querystring');
const axios = require('axios');
const { maxRetry, delayMS, retryStrategy } = require('../helpers/constants');

const createUtterance = payload => {
    return new Promise((resolve, reject) => {
        const base_url = process.env.UTTERANCE_URL.replace("{appId}", 
        process.env.LUIS_APP_ID).replace("{versionId}", 
        process.env.LUIS_VERSION);

        request({
            url: base_url,
            fullResponse: true,
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Ocp-Apim-Subscription-Key': process.env.LUIS_ENDPOINT_KEY
            },
            json: true,
            body: payload,
            maxAttempts: maxRetry,
            retryDelay: delayMS,
            retryStrategy: retryStrategy
        })
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error)
        });
    });
};

const getUttenanceResult = payload => {
    return new Promise((resolve, reject) => {
        const base_url = process.env.UTTERANCE_URL.replace("{appId}", 
        process.env.LUIS_APP_ID).replace("{versionId}", 
        process.env.LUIS_VERSION);

        request({
            url: base_url,
            fullResponse: true,
            method: 'GET',
            headers: { 'Ocp-Apim-Subscription-Key': process.env.LUIS_ENDPOINT_KEY },
            json: true,
            body: payload,
            maxAttempts: maxRetry,
            retryDelay: delayMS,
            retryStrategy: retryStrategy
        })
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error)
        });
    });
};

const getIntentUtterances = utterance => {
    return new Promise((resolve, reject) => {
        // request('https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/ddcb0dee-1ba1-413f-87ef-019a23bb62c0?verbose=true&timezoneOffset=0&subscription-key=9e854f1ba362466db52abd229aec66ff&q=read meeting notes to me')
        // .then(response => {
        //     resolve(response);
        // })
        // .catch(error => {
        //     reject(error)
        // });
        // axios.get(`https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/ddcb0dee-1ba1-413f-87ef-019a23bb62c0?verbose=true&timezoneOffset=0&subscription-key=9e854f1ba362466db52abd229aec66ff&q=read meeting notes to me`)
        // .then(res => {
        //     return resolve(res);
        // })
        // .catch((response) => {
        //     return reject(response);
        // });
    });
};

module.exports = { getUttenanceResult, createUtterance, getIntentUtterances }
