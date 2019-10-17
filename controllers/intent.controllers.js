const service = require('../services/intent.service');

module.exports = {
    getIntents: function(req, res, next) {
        //
    },
    addIntent: function(req, res, next) {
        const payload = req.body;
        service.create(payload)
        .then(response => {
            res.json(body);
            next();
        })
        .catch(err => {
            console.error(err)
            res.json(error);
            next();
        })  
    },
    changeIntent: function(req, res, next) {
        //
    },
    removeIntent: function(req, res, next) {
        //
    },
    getIntent: function(req, res, next) {
        //
    }
};