const fs = require('fs');

const ROUTES_PATH = __dirname + '/routes/';

function loadRoutes(dir, routes) {
  fs.readdirSync(dir).forEach((file) => {
    if (fs.statSync(dir + file).isDirectory()) {
      routes = loadRoutes(dir + file + '/', routes);
    }
    else {
      const routeConfig = require(dir + file);
      if (Array.isArray(routeConfig)) {
        routes.push(...routeConfig);
      } else {
        routes.push(routeConfig);
      }
    }
  });
  return routes;
}

module.exports = loadRoutes(ROUTES_PATH, []);