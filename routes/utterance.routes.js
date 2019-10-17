const express = require('express');
const router = express.Router();
const controller = require('../controllers/utterance.controllers');

module.exports = router;

router.get('/utterances', controller.getUtterances);
router.post('/utterance', controller.addUtterance);