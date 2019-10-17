const service = require('../services/app.service');

module.exports = {
    publishApp: async (req, res, next) => {
        try {
            const payload = req.body;
            const { body } = await service.publish(payload);
            res.json(body);
        } catch(error) {
            res.json(error);
        }
    }
};