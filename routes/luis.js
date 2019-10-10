var express = require('express');
var router = express.Router();
const entityService = require('../services/entity-service');
const intentService = require('../services/intent-service');
const utteranceService = require('../services/utterance-service');
const trainService = require('../services/training-service');

// define the route to add intent on LUIS
router.post('/add-intent', async (req, res) => {
  const payload = req.body;
  try {
    const body = await intentService.addIntents(payload);
    res.json(body);
  } catch(error) {
    res.json(error);
  }
});

//define the route to add entities on LUIS
router.post('/add-entity', async (req, res) => {
  const payload = req.body;
  try {
    const body = await entityService.createEntity(payload);
    res.json(body);
  } catch(error) {
    res.json(error);
  }
});

//define the route to add utterances on LUIS
router.post('/add-utterance', async (req, res) => {
  /**
   * payload = {
   *  "text": "",
      "intentName": "",
      "entityLabels": [""],
   * }
   */
  const payload = req.body;
  try {
    const { body } = await utteranceService.createUtterance(payload);
    res.json(body);
  } catch(error) {
    res.json(error);
  }
});

//define the routes to get all utterances results on the application
router.get('/get-results', async (req, res) => {
  /**
   * optional payload = {
   *  "skip": "0",
      "take": "100",
   * }
   */
  const payload = req.body;
  try {
    const response = await utteranceService.getUtteranceResult(payload);
    res.json(response);
  } catch(error) {
    res.json(error);
  }
});

//defile the routes to train all model in the application
router.post('/train', async (req, res) => {
  /** */
  const payload = req.body;
  try {
    const { body } = await trainService.trainModel(payload);
    res.json(body);
  } catch(error) {
    res,json(error);
  }
});

router.post('/model', async (req, res) => {
  const query = req.body;
  try {
    const body = await trainService.queryModel(query);
    res.json(body);
  } catch(error) {
    console.log(error);
  }
});

module.exports = router;