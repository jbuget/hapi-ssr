const Hapi = require('hapi');

// Create server
const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

// Register routes
const routes = require('./routes');
routes.forEach(route => {
  server.route(route);
});

module.exports = server;