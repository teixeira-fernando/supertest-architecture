import userFactory from '../testData/factory/userFactory';

const requestContainer = request(process.env.API_BASEURL);
const API_PATH = '';

describe('POST - Create a new user', function() {
  test('responds with success for a new valid user data', async function() {
    const response = await requestContainer
        .post(API_PATH)
        .set({Accept: 'application/json'})
        .send(userFactory.createNewValidUser());
    expect(response.status).toEqual(200);
    expect(response.headers['content-type']).toMatch('application/json');
    expect(response.body.data.insert_users.returning).toHaveLength(1);
    expect(response.body.data.insert_users.affected_rows).toBe(1);
  });
});
