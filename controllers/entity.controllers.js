const service = require('../services/entity.service');

module.exports = {
    addEntity: (req, res, next) => {
        const payload = req.body;
        service.create(payload)
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