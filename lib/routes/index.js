module.exports = [
  {
    method: 'GET',
    path: '/',
    handler(request, reply) {
      reply('Hello, world!');
    },
    config: {
      tags: ['api'],
    },
  }, {
    method: 'GET',
    path: '/{name}',
    handler(request, reply) {
      reply(`Hello, ${encodeURIComponent(request.params.name)}!`);
    },
    config: {
      tags: ['api'],
    },
  },
];
