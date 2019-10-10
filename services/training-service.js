require('dotenv').config();
const request = require('requestretry');
const querystring = require('querystring');
const { maxRetry, delayMS, retryStrategy } = require('../helpers/constants');

const trainModel = payload => {
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
};

const queryModel = query => {
    return new Promise((resolve, reject) => {
        const endpoint = process.env.LUIS_BASE_URL;
        let luisAppId = process.env.LUIS_APP_ID;
        let queryParams = {  
           "subscription-key": process.env.LUIS_ENDPOINT_KEY,      
           "timezoneOffset": "0",     
           "verbose":  true,        
           "q": query    
        };
        const luisRequest =  endpoint + luisAppId + '?' + querystring.stringify(queryParams);
        
        request(luisRequest, function (err, response, body) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                var data = JSON.parse(body);
                resolve(data);
            }    
        });
    });
}

module.exports = { 
    trainModel,
    queryModel
};