const IntentService = require('../services/intent.service');

class IntentController {

    static addIntent = async (req, res, next) => {
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