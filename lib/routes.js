const requireAll = require('require-all');

const ROUTES_PATH = __dirname + '/routes';

function loadRoutes() {
  const requiredRoutes = requireAll(ROUTES_PATH);
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