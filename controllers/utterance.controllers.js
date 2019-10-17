const service = require('../services/utterance.service');

module.exports = {
    getUtterances: async function(req, res, next) {
        try {
            const { body } = await service.getAll();
            res.json(body);
        } catch(error) {
            res.json(error);
        }
    },
    addUtterance: async (req, res, next) => {
        try {
            const payload = req.body;
            const { body } = await service.create(payload);
            res.json(body);
        } catch(error) {
            res.json(error);
        }
    },
    changeUtterance: function(req, res, next) {
        //
    },
    removeUtterance: function(req, res, next) {
        //
    },
    getUtterance: function(req, res, next) {
        //
    }
};