const hapi = require('hapi');

// Create server
const server = new hapi.Server();
server.connection({
  port: process.env.PORT || 3000,
  host: 'localhost'
});

// Register routes
const routes = require('./routes');
routes.forEach(routeConfig => {
  server.route(routeConfig);
});

module.exports = server;