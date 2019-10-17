const express = require('express');
const router = express.Router();
const controller = require('../controllers/model.controllers');

module.exports = router;

router.get('/train', controller.allTrainStatus);
router.post('/train', controller.trainModel);