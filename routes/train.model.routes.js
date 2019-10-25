const express = require('express');
const router = express.Router();
const TrainModelController = require('../controllers/train.model.controllers');

module.exports = router;

router.get('/train', (req, res, next) => {
    TrainModelController.allTrainStatus(req, res, next);
});

router.post('/train', (req, res, next) => {
    TrainModelController.trainModel(req, res, next);
});