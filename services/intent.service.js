require('dotenv').config();
const request = require('requestretry');
const { maxRetry, delayMS, retryStrategy } = require('../helpers/constants');

class IntentServiceController {
    static create(payload) {
        return new Promise((resolve, reject) => { 
            const base_url = process.env.INTENT_URL.replace("{appId}", 
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
    }
}

module.exports = IntentServiceController;