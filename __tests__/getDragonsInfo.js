import dragonInfoFactory from '../testData/factory/dragonInfoFactory';

const requestContainer = request(process.env.API_BASEURL);
const API_PATH = '';

describe('POST - Get info from single Dragon', function() {
  test('responds with success and the data from the Dragon corresponding to the provided id', async function() {
    const ID = '5e9d058759b1ff74a7ad5f8f'
    const response = await requestContainer
        .post(API_PATH)
        .set({Accept: 'application/json'})
        .send(dragonInfoFactory.getInfoSingleDragon(ID));
    expect(response.status).toEqual(200);
    expect(response.headers['content-type']).toMatch('application/json');
    expect(response.body.data.dragon).not.toBeNull()
    expect(response.body.data.dragon.id).toBe(ID)
    expect(response.body.data.dragon.description).not.toBeNull()
  });

  test('responds with error when the given id does not exist', async function() {
    const ID = '9999'
    const response = await requestContainer
        .post(API_PATH)
        .set({Accept: 'application/json'})
        .send(dragonInfoFactory.getInfoSingleDragon(ID));
    expect(response.status).toEqual(200);
    expect(response.headers['content-type']).toMatch('application/json');
    expect(response.body.errors).not.toBeNull()
    expect(response.body.errors.length).toBeGreaterThan(0)
    expect(response.body.errors.length).toBeGreaterThan(0)
  });
});
