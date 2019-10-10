const delayMS = 1000;
const maxRetry = 5;

const retryStrategy =  (err, response, body) => {
    let shouldRetry = err || (response.statusCode === 429);
    if (shouldRetry) console.log("retrying add intent...");
    return shouldRetry;
};

module.exports = { delayMS, maxRetry, retryStrategy};