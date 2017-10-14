const Good = require('good');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('../package');

module.exports = [{
  register: Good,
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
}, Inert,
  Vision, {
    register: HapiSwagger,
    options: {
      info: {
        'title': 'Test API Documentation',
        'version': Pack.version,
      }
    }
  }];