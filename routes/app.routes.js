const express = require('express');
const router = express.Router();
const AppController = require('../controllers/app.controllers');

module.exports = router;

router.post('/publish', AppController.publishApp);