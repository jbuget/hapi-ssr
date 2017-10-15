const logger = require('../helpers/logger');

const accounts = {
  123: {
    id: 123,
    user: 'john',
    fullName: 'John Doe',
    scope: ['a', 'b'],
  },
};

module.exports = {

  validate(request, decodedToken, callback) {
    let error;
    let succeeded = false;

    const credentials = accounts[decodedToken.accountId];
    if (!credentials) {
      error = new Error('Invalid credentials');
      logger.error(error);
    } else {
      succeeded = true;
    }
    return callback(error, succeeded, credentials);
  },
};
