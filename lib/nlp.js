'use strict';

class NLP {
  constructor(options) {
    const {
      tencentCloud,
      version = 'v20190408',
      ReqMethod = 'POST',
      Endpoint = 'nlp.tencentcloudapi.com',
      Region = 'ap-guangzhou',
      SecretId,
      SecretKey,
    } = options;

    const Credential = tencentCloud.common.Credential;
    const cred = new Credential(SecretId, SecretKey);

    const HttpProfile = tencentCloud.common.HttpProfile;
    const httpProfile = new HttpProfile();
    HttpProfile.reqMethod = ReqMethod;
    httpProfile.endpoint = Endpoint;

    const ClientProfile = tencentCloud.common.ClientProfile;
    const clientProfile = new ClientProfile();
    clientProfile.httpProfile = httpProfile;

    const NlpClient = tencentCloud.nlp[version].Client;
    this.client = new NlpClient(cred, Region, clientProfile);

    const models = tencentCloud.nlp[version].Models;
    this.models = models;

    this.options = options;
  }

  exec(model, action, params) {
    return new Promise((resolve, reject) => {
      const { client, models } = this;
      const { [model]: Model } = models;
      const req = new Model();
      req.deserialize(params); // req.from_json_string(params);
      client[action](req, (err, res) => {
        if (err) return reject(err);
        resolve(res.to_json_string());
      });
    });
  }

  keywords(params) {
    return this.exec('KeywordsExtractionRequest', 'KeywordsExtraction', params);
  }

  summary(params) {
    return this.exec('AutoSummarizationRequest', 'AutoSummarization', params);
  }

  similar(params) {
    return this.exec('TextSimilarityRequest', 'TextSimilarity', params);
  }
}

module.exports = NLP;
