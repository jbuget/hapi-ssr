module.exports = {
  method: 'GET',
  path: '/toto',
  handler: (request, reply) => {
    reply('Toto');
  },
  config: {
    tags: ['api']
  }
};