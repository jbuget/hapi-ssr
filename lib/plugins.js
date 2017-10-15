const good = require('good');
const inert = require('inert');
const vision = require('vision');
const hapiSwagger = require('hapi-swagger');
const blipp = require('blipp');
const pack = require('../package');
const hapiAuthJwt = require('hapi-auth-jwt');
const logger = require('./helpers/logger');
const GoodWinston = require('good-winston');

const goodWinstonStream = new GoodWinston({
  winston: logger,
});

module.exports = [
  {
    register: good,
    options: {
      ops: {
        interval: 60 * 1000, // log ops data every minute
      },
      reporters: {
        winston: [goodWinstonStream],
      },
    },
  },
  blipp,
  inert,
  vision,
  {
    register: hapiSwagger,
    options: {
      info: {
        title: 'Test API Documentation',
        version: pack.version,
      },
    },
  },
  hapiAuthJwt,
];
