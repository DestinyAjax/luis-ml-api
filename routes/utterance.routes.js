const express = require('express');
const router = express.Router();
const UtteranceController = require('../controllers/utterance.controllers');

module.exports = router;

router.get('/utterances', (req, res, next) => {
    UtteranceController.getUtterances(req, res, next);
});

router.post('/utterance', (req, res, next) => {
    UtteranceController.addUtterance(req, res, next);
});