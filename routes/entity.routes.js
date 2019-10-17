const express = require('express');
const router = express.Router();
const controller = require('../controllers/entity.controllers');

module.exports = router;

router.get('/entities', controller.getEntities);
router.post('/entity', controller.addEntity);
router.put('/entity/:entityId', controller.changeEntity);
router.delete('/entity/:entityId', controller.removeEntity);
router.get('/entity/:entityId', controller.getEntity);