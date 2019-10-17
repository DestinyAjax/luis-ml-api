require('dotenv').config();
const request = require('requestretry');
const { maxRetry, delayMS, retryStrategy } = require('../helpers/constants');

module.exports = {
    train: (payload) => {
        return new Promise((resolve, reject) => {
            const base_url = process.env.TRAIN_URL.replace("{appId}", 
            process.env.LUIS_APP_ID).replace("{versionId}", 
            process.env.LUIS_VERSION);
    
            request({
                url: base_url,
                fullResponse: true,
                method: 'POST',
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
    },
    getAllStatus: (payload) => {
        return new Promise((resolve, reject) => {
            const base_url = process.env.TRAIN_URL.replace("{appId}", 
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
    }
};