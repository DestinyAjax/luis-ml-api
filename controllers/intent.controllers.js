const IntentService = require('../services/intent.service');

class IntentController {

    static async addIntent(req, res, next) {
        try {
            const payload = req.body;
            const response = await IntentService.create(payload);
            res.json(response);
            next();
        } catch(err) {
            console.error(err)
            res.json(err);
            next();
        }
    }
}

module.exports = IntentController;