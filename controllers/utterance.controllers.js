const UtteranceService = require('../services/utterance.service');

class UtteranceController {

    static getUtterances = async (req, res, next) => {
        try {
            const payload = req.body;
            const response = await UtteranceService.getAll(payload);
            res.json(response);
            next();
        } catch(err) {
            res.json(err);
            next();
        }
    }

    static addUtterance = async (req, res, next) => {
        try {
            const payload = req.body;
            const response = await UtteranceService.create(payload);
            res.json(response);
            next();
        } catch(err) {
            res.json(err);
            next();
        }
    }
}

module.exports = UtteranceController;