var express = require('express');
var router = express.Router();
const entityService = require('../services/entity.service');
const intentService = require('../services/intent.service');
const utteranceService = require('../services/utterance.service');
const trainService = require('../services/model.service');
const axios = require('axios');

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

//get the training statuses of all versions of the application
router.get('/train', async (req, res) => {
  /** */
  const payload = req.body;
  try {
    const { body } = await trainService.getTrainingStatusl(payload);
    res.json(body);
  } catch(error) {
    res.json(error);
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

router.post('/publish', async (req, res) => {
  const payload = req.body;
  try {
    const { body } = await trainService.publishApp(payload);
    res.json(body);
  } catch(error) {
    res.json(error);
  }
});

router.get('/utterance/:query', async (req, res) => {
  const { query } = req.params;
  console.log(query)
  try {
    // const response = await intentService.getIntentUtterances(query);
    // res.json(response);
    axios.get(`https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/ddcb0dee-1ba1-413f-87ef-019a23bb62c0?verbose=true&timezoneOffset=0&subscription-key=9e854f1ba362466db52abd229aec66ff&q=read meeting notes to me`)
    .then(response => {
        // return resolve(res);
        res.json(response)
    })
    .catch((err) => {
        res.json(err)
    });
  } catch(error) {
    res.json(error);
  }
});

module.exports = router;