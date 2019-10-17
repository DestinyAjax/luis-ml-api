const service = require('../services/utterance.service');

module.exports = {
    getUtterances: (req, res, next) => {
        const payload = req.body;
        service.getAll(payload)
        .then(response => {
            res.json(response);
            next();
        })
        .catch(err => {
            res.json(err);
            next();
        })
    },
    addUtterance: (req, res, next) => {
        const payload = req.body;
        service.create(payload)
        .then(response => {
            res.json(response);
            next();
        })
        .catch(err => {
            res.json(err);
            next();
        })
    }
};