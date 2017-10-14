const routes = require('../../lib/routes');

const expectedRoutes = [
  { method: 'GET', path: '/' },
  { method: 'GET', path: '/toto' },
];

function assertThatExist(expecetdRoute) {
  const matchingRoutes = routes.filter((route) => {
    return route.method === expecetdRoute.method && route.path === expecetdRoute.path;
  });
  expect(matchingRoutes).to.have.lengthOf(1);
}

describe('Unit | routes', () => {

  expectedRoutes.forEach((route) => {
    it(`should contain ${route.method} ${route.path}`, function() {
      assertThatExist(route);
    });

  });

});