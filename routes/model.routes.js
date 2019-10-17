const express = require('express');
const router = express.Router();
const controller = require('../controllers/model.controllers');

module.exports = router;

router.get('/train', function(req, res) {
    controller.getTrainStatus
});
router.post('/train', controller.trainModel);