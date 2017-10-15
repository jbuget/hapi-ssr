const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = {
  method: 'GET',
  path: '/authentication/token',
  handler: (request, reply) => {
    const token = jwt.sign({ accountId: 123 }, config.JWT_PRIVATE_KEY);
    reply({ token });
  },
  config: {
    tags: ['api'],
  },
};
