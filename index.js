const server = require('./lib/server');
const logger = require('./lib/helpers/logger');

server.start((err) => {
  if (err) {
    logger.error(err);
    throw err;
  }
  logger.info(`Server running at: ${server.info.uri}`);
});
