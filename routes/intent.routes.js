const express = require('express');
const router = express.Router();
const IntentController = require('../controllers/intent.controllers');

module.exports = router;

router.post('/intent', IntentController.addIntent);