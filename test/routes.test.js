const request = require('supertest');
const app = require('../index');

describe('LUIS Endpoints', () => {
    it('should create a new intent', async () => {
        const res = await request(app).post('/luis/add-intent').send({"name": "BuyADrink"});
        expect(res.body.statusCode).toEqual(201);
    });

    it('should create a new entity', async () => {
        const res = await request(app).post('/luis/add-entity').send({"name": "Location"});
        expect(res.body.statusCode).toEqual(201);
    });
});
