const server = require('../../lib/server');

describe('Functional | index API', () => {

  describe('GET /', () => {

    it('should return HTTP status code 200 with response "Hello, world!"', (done) => {
      // given
      const options = {
        method: 'GET',
        url: '/'
      };

      // when
      server.inject(options, (res) => {

        // then
        expect(res.statusCode).to.equal(200);
        expect(res.headers['content-type']).to.contain('text/html');
        expect(res.payload).to.equal('Hello, world!');
        done();
      });
    });
  });

});
