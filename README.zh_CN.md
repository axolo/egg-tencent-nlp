# egg-tencent-nlp

[腾讯云自然语言处理]Egg.js插件。

## 安装

```bash
npm i @axolo/egg-tencent-nlp --save
```

## 开启插件

```js
// config/plugin.js
exports.tencentSms = {
  enable: true,
  package: '@axolo/egg-tencent-nlp',
};
```

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

```js
// {app_root}/config/config.default.js
exports.tencentNlp = {
  SecretId: 'SECRET_ID',
  SecretKey: 'SECRET_KEY',
};
```

## API

### exec(model, action, params)

- model: 腾讯云自然语言处理 model
- action: 腾讯云自然语言处理 action
- params: 腾讯云自然语言处理 action params
- return: 腾讯云自然语言处理请求返回

### keywords(params)

即`exec('KeywordsExtractionRequest', 'KeywordsExtraction', params)`

### summary(params)

即`exec('AutoSummarizationRequest', 'AutoSummarization', params)`

### similar(params)

即`exec('TextSimilarityRequest', 'TextSimilarity', params)`

## 例子

```js
'use strict';

const Controller = require('egg').Controller;

class NlpController extends Controller {
  async create() {
    const { app, ctx } = this;
    const { body } = ctx.request;
    const res = await app.nlp.keywords(body);
    ctx.body = res;
  }

  async update() {
    const { app, ctx } = this;
    const { params, request } = ctx;
    const { id } = params;
    const [ model, action ] = id.split('.');
    const { body } = request;
    const res = await app.nlp.exec(model, action, body);
    ctx.body = res;
  }
}

module.exports = NlpController;
```

## 提问交流

请到 [egg issues](https://github.com/axolo/egg-tencent-nlp/issues) 异步交流。

## License

[MIT](LICENSE)

[腾讯云自然语言处理]: https://cloud.tencent.com/document/product/271/35491
