const jwt = require('jsonwebtoken');
const privateKey = 'lorem-ipsum';

module.exports = {
  method: 'GET',
  path: '/authentication/token',
  handler: (request, reply) => {
    const token = jwt.sign({ accountId: 123 }, privateKey);
    reply({ token });
  },
  config: {
    tags: ['api']
  }
};
