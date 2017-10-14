require('dotenv').config();

const hapi = require('hapi');
const config = require('./config');
const plugins = require('./plugins');
const routes = require('./routes');
const authenticationService = require('./services/authentication-service');
const logger = require('./helpers/logger');

// Create server
const server = new hapi.Server();
server.connection({
  port: process.env.PORT || 3000,
  host: 'localhost'
});

server.register(plugins, (err) => {

  if (err) {
    logger.error(err);
    throw err;
  }

  // Define & configure JWT token authentication strategy
  server.auth.strategy('token', 'jwt', {
    key: config.JWT_PRIVATE_KEY,
    validateFunc: authenticationService.validate,
    verifyOptions: { algorithms: ['HS256'] }  // only allow HS256 algorithm
  });

  // Register routes
  routes.forEach(routeConfig => {
    server.route(routeConfig);
  });
});

module.exports = server;