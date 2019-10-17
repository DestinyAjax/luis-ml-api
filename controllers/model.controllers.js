const service = require('../services/model.service');

module.exports = {
    trainModel: (req, res, next) => {
        const payload = req.body;
        service.train(payload)
        .then(response => {
            res.json(response);
            next();
        })
        .catch(err => {
            console.log(err);
            res.json(err);
            next();
        })
    },
    allTrainStatus: (req, res, next) => {
        const payload = req.body;
        service.getAllStatus(payload)
        .then(response => {
            res.josn(response);
            next();
        })
        .catch(err => {
            res.json(err);
            next();
        })
    }
}