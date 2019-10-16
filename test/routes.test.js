// const request = require('supertest');
// const expect = require('chai').expect;
// const app = require('../index');

// describe('/ADD INTENT', () => {
//   it('create an intent successfully', (done) => {
//     request(app).post('/luis/add-intent')
//       .send({"name": "getWeather"})
//       .then((res) => {
//         const body = res.body;
//         expect(body).to.contain.property('statusCode');
//         expect(body.statusCode).to.equal(201);
//         expect(body).to.contain.property('body');
//         done();
//       })
//       .catch((err) => done(err));
//   });
// });

// describe('/ADD ENTITY', () => {
//   it('create a new entity successfully', (done) => {
//     request(app).post('/luis/add-entity')
//       .send({"name": "Weather"})
//       .then((res) => {
//         const body = res.body;
//         expect(body).to.contain.property('statusCode');
//         expect(body.statusCode).to.equal(201);
//         expect(body).to.contain.property('body');
//         done();
//       })
//       .catch((err) => done(err));
//   });
// });

// describe('/ADD UTTERANCE', () => {
//   it('create a new utterance successfully', (done) => {
//     request(app).post('/luis/add-utterance')
//       .send([{
//         "text":"turn floor lamp to purple",
//         "intentName":"TurnOn",
//         "entityLabels":[
//           {
//             "entityName":"Light",
//             "startCharIndex":5,
//             "endCharIndex":9
//           }
//         ]
//       }])
//       .then((res) => {
//         const body = res.text;
//         console.log(JSON.stringify(body))
//         // expect(body).to.be.an('array');
//         expect(body).to.deep.include({"hasError": false});
//         done();
//       })
//       .catch((err) => done(err));
//   });
// });

// describe('/TRAIN', () => {
//   it('it should train the application successfully', (done) => {
//     request(app).post('/luis/train')
//       .send({})
//       .then((res) => {
//         const body = res.body;
//         expect(body).to.contain.property('statusId');
//         expect(body).to.contain.property('status');
//         done();
//       })
//       .catch((err) => done(err));
//   })
// })

// describe('/PUBLISH', () => {
//   it('publishes the application', (done) => {
//     request(app).post('/luis/publis')
//       .send({
//         "versionId": "0.1",
//         "isStaging": false,
//         "directVersionPublish": false
//       })
//       .then((res) => {
//         const body = res.body;
//         expect(body).to.contain.property('endpointUrl');
//         expect(body).to.contain.property('subscription-key');
//         expect(body).to.contain.property('isStaging');
//         expect(body.isStaging).to.equal(false);
//         done();
//       })
//       .catch((err) => done(err));
//   });
// });