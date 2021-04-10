'use strict';

const tencentCloudSdk = require('tencentcloud-sdk-nodejs');
const Nlp = require('./lib/nlp');

const createNlp = options => {
  const nlp = new Nlp({ ...options });
  const tencentCloud = options.tencentCloud || tencentCloudSdk;
  nlp.tencentCloud = tencentCloud;
  return nlp;
};

module.exports = app => {
  app.addSingleton('tencentNlp', createNlp);
};
