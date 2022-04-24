// Or async function
module.exports = async () => {
  require('dotenv').config();
  return {
    verbose: true,
    globals: {
      request: require('supertest'),
    },
  };
};
