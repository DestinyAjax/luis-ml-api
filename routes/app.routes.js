const express = require('express');
const router = express.Router();
const controller = require('../controllers/app.controllers');

module.exports = router;

router.get('/publish', function(req, res) {
    controller.getEntities
});
router.post('/publish', function(req, res) {
    controller.addEntity
});