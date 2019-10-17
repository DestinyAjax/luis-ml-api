const service = require('../services/model.service');

module.exports = {
    trainModel: async (req, res, next) => {
        try {
            const payload = req.body;
            const { body } = await service.train(payload);
            res.json(body);
        } catch(error) {
            res.json(error);
        }
    },
    allTrainStatus: async (req, res, next) => {
        try {
            const payload = req.body;
            const { body } = await service.getAllStatus(payload);
            res.json(body);
        } catch(error) {
            res.json(error);
        }
    }
}