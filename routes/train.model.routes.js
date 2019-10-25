const express = require('express');
const router = express.Router();
const TrainModelController = require('../controllers/train.model.controllers');

module.exports = router;

router.get('/train', TrainModelController.allTrainStatus);
router.post('/train', TrainModelController.trainModel);