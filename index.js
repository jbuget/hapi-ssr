const server = require('./lib/server');
const plugins = require('./lib/plugins');

server.register(plugins, (err) => {

  if (err) {
    throw err; // something bad happened loading the plugins
  }

  server.start((err) => {

    if (err) {
      throw err;
    }
    server.log('info', 'Server running at: ' + server.info.uri);
  });
});