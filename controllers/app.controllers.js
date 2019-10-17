const service = require('../services/app.service');

module.exports = {
    publishApp: (req, res, next) => {
        const payload = req.body;
        service.publish(payload)
        .then(response => {
            res.json(response);
            next();
        })
        .catch(err => {
            console.log(err);
            res.json(err);
            next();
        })
    }
};