import dragonInfoFactory from '../testData/factory/dragonInfoFactory';
import request from 'supertest';

const requestContainer = request(process.env.API_BASEURL);
const API_PATH = '';

describe('POST - Get info from all Dragons', function() {
  test('responds with success and the data from all existing Dragons', async function() {
    const response = await requestContainer
        .post(API_PATH)
        .set({Accept: 'application/json'})
        .send(dragonInfoFactory.getInfoAllDragons());
    expect(response.status).toEqual(200);
    expect(response.headers['content-type']).toMatch('application/json');
    expect(response.body.data.dragons).not.toBeNull();
    expect(response.body.data.dragons.length).toBeGreaterThan(0);
    expect(response.body.data.dragons[0].id).not.toBeNull();
    expect(response.body.data.dragons[0].description).not.toBeNull();
  });
});
