const environment = process.env.NODE_ENV || 'development';

function config() {

  let ENV = {
    JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY
  };

  if (environment === 'production') {
    // Put here some production config
  }

  if (environment === 'test') {
    ENV.JWT_PRIVATE_KEY = 'jwt_test_key';
  }

  return ENV;
}

module.exports = config();