const service = require('../services/intent.service');

module.exports = {
    addIntent: function(req, res, next) {
        const payload = req.body;
        service.create(payload)
        .then(response => {
            res.json(response);
            next();
        })
        .catch(err => {
            console.error(err)
            res.json(err);
            next();
        })  
    }
};