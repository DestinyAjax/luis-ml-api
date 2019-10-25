const express = require('express');
const router = express.Router();
const UtteranceController = require('../controllers/utterance.controllers');

module.exports = router;

router.get('/utterances', UtteranceController.getUtterances);
router.post('/utterance', UtteranceController.addUtterance);