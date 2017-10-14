const good = require('good');
const inert = require('inert');
const vision = require('vision');
const hapiSwagger = require('hapi-swagger');
const blipp = require('blipp');
const pack = require('../package');

module.exports = [
  {
    register: good,
    options: {
      reporters: {
        console: [{
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [{
            response: '*',
            log: '*'
          }]
        }, {
          module: 'good-console'
        }, 'stdout']
      }
    }
  },
  blipp,
  inert,
  vision,
  {
    register: hapiSwagger,
    options: {
      info: {
        'title': 'Test API Documentation',
        'version': pack.version,
      }
    }
  }
];