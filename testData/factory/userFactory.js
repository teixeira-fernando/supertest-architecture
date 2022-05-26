import newUserQuery from '../queries/createUserQuery';
import {faker} from '@faker-js/faker';

class UserFactory {
  createNewValidUser() {
    const newUserData = newUserQuery;
    newUserData.variables.username = faker.name.firstName + ' ' + faker.name.lastName;
    newUserData.variables.rocketname = faker.name.jobType + ' ' + faker.hacker.verb;
    return newUserData;
  }
}

export default new UserFactory();
