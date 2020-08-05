'use strict';

const tencentCloud = require('tencentcloud-sdk-nodejs');

/**
 * egg-tencent-nlp default config
 *
 * @member Config#cos
 * @property {object} tencentCloud tencentcloud-sdk-nodejs
 * @property {string} version tencent cloud nlp sdk version
 * @property {string} ReqMethod HttpProfile reqMethod
 * @property {string} Endpoint HttpProfile endpoint
 * @property {string} Region nlpClient region
 * @property {string} SecretId nlpClient SecretId
 * @property {string} SecretKey nlpClient SecretKey
 * @property {string} AppId nlpClient nlpSdkAppid
 * @see https://cloud.tencent.com/document/product/271/35491
 */
exports.tencentNlp = {
  default: {
    tencentCloud,
    version: 'v20190408',
    ReqMethod: 'POST',
    Endpoint: 'nlp.tencentcloudapi.com',
    Region: 'ap-guangzhou',
  },
  // client: {
  //   SecretId: 'NLP_SECRETID',
  //   SecretKey: 'NLP_SECRETKEY',
  //   AppId: 'NLP_APPID',
  // },
};
