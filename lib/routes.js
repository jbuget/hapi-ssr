const fs = require('fs');

const ROUTES_PATH = `${__dirname}/routes/`;

function loadRoutes(dir, routes) {
  /* eslint-disable no-param-reassign, global-require, import/no-dynamic-require */
  fs.readdirSync(dir).forEach((file) => {
    if (fs.statSync(dir + file).isDirectory()) {
      routes = loadRoutes(`${dir + file}/`, routes);
    } else {
      const routeConfig = require(dir + file);
      if (Array.isArray(routeConfig)) {
        routes.push(...routeConfig);
      } else {
        routes.push(routeConfig);
      }
    }
  });
  /* eslint-enable no-param-reassign, global-require, import/no-dynamic-require */
  return routes;
}

module.exports = loadRoutes(ROUTES_PATH, []);
