const routes = require('../../lib/routes');

const expectedRoutes = [
  { method: 'GET', path: '/' },
  { method: 'GET', path: '/toto' },
];

function assertThatExist(expectedRoute) {
  const matchingRoutes = routes.filter(route =>
    route.method === expectedRoute.method &&
    route.path === expectedRoute.path);
  expect(matchingRoutes).to.have.lengthOf(1);
}

describe('Unit | routes', () => {
  expectedRoutes.forEach((route) => {
    it(`should contain ${route.method} ${route.path}`, () => {
      assertThatExist(route);
    });
  });
});
