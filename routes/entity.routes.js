const express = require('express');
const router = express.Router();
const controller = require('../controllers/entity.controllers');

module.exports = router;

router.post('/entity', controller.addEntity);