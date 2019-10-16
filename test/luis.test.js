const sinon = require('sinon');
const request = require('request');
const chai = require('chai');
const should = chai.should();

const base = 'http://localhost:9000';
const luis = require('../helpers/luis-test-case');

describe('/LUIS SERVICE', () => {
    beforeEach(() => {
        this.get = sinon.stub(request, 'get');
        this.post = sinon.stub(request, 'post');
    });
      
    afterEach(() => {
        request.get.restore();
        request.post.restore();
    });

    describe('INTENT /luis/add-intetnt', () => {
        it('should return the ID of the intent that was added', (done) => {
            const options = {
                method: 'post',
                body: {
                  name: 'checkWeather',
                },
                json: true,
                url: `${base}/luis/add-intent`
            };
            const obj = luis.intent.add.success;
            this.post.yields(null, obj.res, obj.body);
            request.post(options, (err, res, body) => {
                res.statusCode.should.equal(200);
                res.headers['content-type'].should.contain('application/json');
                body.statusCode.should.eql(201);
                done();
            });
        });
    });

    describe('ENTITY /luis/add-entity', () => {
        it('should return the ID of the entity that was added', (done) => {
            const options = {
                method: 'post',
                body: {
                  name: 'Weather',
                },
                json: true,
                url: `${base}/luis/add-entity`
            };
            const obj = luis.intent.add.success;
            this.post.yields(null, obj.res, obj.body);
            request.post(options, (err, res, body) => {
                res.statusCode.should.equal(200);
                res.headers['content-type'].should.contain('application/json');
                body.statusCode.should.eql(201);
                done();
            });
        });
    });

    describe('UTTERANCES /luis/add-utterance', () => {
        it('should return the ID of the example utterance that was added', (done) => {
            const payload = [{
                "text": "switch the lights to green",
                "intentName": "TurnAllOn",
                "entityLabels": [{"entityName": "Color", "startCharIndex": 21, "endCharIndex":25}]
            }];
            const options = {
                method: 'post',
                body: payload,
                json: true,
                url: `${base}/luis/add-utterance`
            };
            const obj = luis.utterance.add.success;
            this.post.yields(null, obj.res, obj.body);
            request.post(options, (err, res, body) => {
                res.statusCode.should.equal(200);
                res.headers['content-type'].should.contain('application/json');
                body[0].should.include.keys('value', 'hasError');
                body[0].hasError.should.eql(false);
                done();
            });
        });
    });

    describe('TRAIN /luis/train', () => {
        it('should return the status of the current trained model', (done) => {
            const options = {
                method: 'post',
                body: {},
                json: true,
                url: `${base}/luis/train`
            };
            const obj = luis.train.success;
            this.post.yields(null, obj.res, obj.body);
            request.post(options, (err, res, body) => {
                res.statusCode.should.equal(200);
                res.headers['content-type'].should.contain('application/json');
                body.should.include.keys('statusId', 'status');
                done();
            });
        });
    });

    describe('PUBLISH /luis/publish', () => {
        it('should return the application publish properties', (done) => {
            const options = {
                method: 'post',
                body: {
                    "versionId": "0.1",
                    "isStaging": false,
                    "directVersionPublish": false
                },
                json: true,
                url: `${base}/luis/publish`
            };
            const obj = luis.publish.success;
            this.post.yields(null, obj.res, obj.body);
            request.post(options, (err, res, body) => {
                res.statusCode.should.equal(200);
                res.headers['content-type'].should.contain('application/json');
                body.should.include.keys('versionId', 'endpointUrl', 'isStaging', 'endpointRegion');
                body.isStaging.should.eql(false);
                done();
            });
        });
    });
});
