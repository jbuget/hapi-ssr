const RequireAll = require('require-all');

const ROUTES_PATH = __dirname + '/routes';

function loadRoutes() {
  const requiredRoutes = RequireAll(ROUTES_PATH);
  return Object.keys(requiredRoutes).reduce((routes, routeFile) => {
    const requiredRoute = requiredRoutes[routeFile];
    if (Array.isArray(requiredRoute)) {
      routes.push(...requiredRoute);
    } else {
      routes.push(requiredRoute);
    }
    return routes;
  }, []);
}

module.exports = loadRoutes();