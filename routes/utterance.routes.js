const express = require('express');
const router = express.Router();
const controller = require('../controllers/utterance.controllers');

module.exports = router;

router.get('/utterances', controller.getUtterances);
router.post('/utterances', controller.addUtterance);
router.put('/utterance/:utteranceId', controller.changeUtterance);
router.delete('/utterance/:utteranceId', controller.removeUtterance);
router.get('/utterance/:utteranceId', controller.getUtterance);