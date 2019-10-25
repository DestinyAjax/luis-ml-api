const EntityService = require('../services/entity.service');

class EntityController {

    static async addEntity(req, res, next) {
        try {
            const payload = req.body;
            const response = await EntityService.create(payload);
            res.json(response);
            next();
        } catch(err) {
            console.log(err);
            res.json(err);
            next();
        }
    }
}

module.exports = EntityController;