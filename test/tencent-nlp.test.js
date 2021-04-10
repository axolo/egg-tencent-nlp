'use strict';

const mock = require('egg-mock');

describe('test/tencent-nlp.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/tencent-nlp-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, tencentNlp')
      .expect(200);
  });
});
