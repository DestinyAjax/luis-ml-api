const express = require('express');
const router = express.Router();
const controller = require('../controllers/app.controllers');

module.exports = router;

router.post('/publish', controller.publishApp);