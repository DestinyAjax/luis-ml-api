const AppService = require('../services/app.service');

class AppController {

    static async publicApp (req, res, next) {
        try {
            const payload = req.body;
            const response = await AppService.publish(payload);
            res.json(response);
            next();
        } catch(err) {
            console.log(err);
            res.json(err);
            next();
        }
    }
}

module.exports = AppController;