const express = require('express');
const router = express.Router();
const controller = require('../controllers/intent.controllers');

module.exports = router;

router.post('/intent', function(req, res) {
    controller.addEntity
});