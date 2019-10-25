const express = require('express');
const router = express.Router();
const EntityController = require('../controllers/entity.controllers');

module.exports = router;

router.post('/entity', EntityController.addEntity);