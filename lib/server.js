const hapi = require('hapi');
const plugins = require('./plugins');
const routes = require('./routes');

// Create server
const server = new hapi.Server();
server.connection({
  port: process.env.PORT || 3000,
  host: 'localhost'
});

const privateKey = 'lorem-ipsum';

const accounts = {
  123: {
    id: 123,
    user: 'john',
    fullName: 'John Doe',
    scope: ['a', 'b']
  }
};

function validate(request, decodedToken, callback) {
  let error;
  const credentials = accounts[decodedToken.accountId] || {};
  if (!credentials) {
    return callback(error, false, credentials);
  }
  return callback(error, true, credentials);
}

server.register(plugins, (error) => {

  server.auth.strategy('token', 'jwt', {
    key: privateKey,
    validateFunc: validate,
    verifyOptions: { algorithms: ['HS256'] }  // only allow HS256 algorithm
  });

  // Register routes
  routes.forEach(routeConfig => {
    server.route(routeConfig);
  });
});

module.exports = server;