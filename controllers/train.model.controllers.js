const TrainModelService = require('../services/train.model.service');

class TrainAppModelController {
    static allTrainStatus = async (req, res, next) => {
        try {
            const payload = req.body;
            const response = await TrainModelService.getAllStatus(payload);
            res.json(response);
        } catch(err) {
            console.log(err);
            res.json(err)
            next();
        }
    }

    static trainModel = async (req, res, next) => {
        try {
            const payload = req.body;
            const response = await TrainModelService.train(payload);
            res.json(response);
            next();
        } catch(err) {
            console.log(err);
            res.json(err)
            next();
        }
    }
}

module.exports = TrainAppModelController;