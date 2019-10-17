const service = require('../services/entity.service');

module.exports = {
    getEntities: function(req, res, next) {
        //
    },
    addEntity: async (req, res, next) => {
        try {
            const payload = req.body;
            const { body } = await service.create(payload);
            res.json(body);
        } catch(error) {
            res.json(error);
        }
    },
    changeEntity: function(req, res, next) {
        //
    },
    removeEntity: function(req, res, next) {
        //
    },
    getEntity: function(req, res, next) {
        //
    }
};