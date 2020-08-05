'use strict';

const Nlp = require('./lib/nlp');

const createNlp = options => {
  const nlp = new Nlp({ ...options });
  const { tencentCloud } = options;
  nlp.tencentCloud = tencentCloud;
  return nlp;
};

module.exports = app => {
  app.addSingleton('tencentNlp', createNlp);
};
