# egg-tencent-nlp

[Tencent Cloud NLP] for Egg.js.

## Install

```bash
npm i @axolo/egg-tencent-nlp --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.tencentNlp = {
  enable: true,
  package: '@axolo/egg-tencent-nlp',
};
```

## Configuration

see [config/config.default.js](config/config.default.js) for more detail.

```js
// {app_root}/config/config.default.js
exports.tencentNlp = {
  SecretId: 'SECRET_ID',
  SecretKey: 'SECRET_KEY',
};
```

## API

### exec(model, action, params)

> params

| params |  type  |            description             |
| ------ | ------ | ---------------------------------- |
| model  | string | model of Tencent Cloud NLP         |
| action | string | action of Tencent Cloud NLP        |
| params | object | params of Tencent Cloud NLP action |

> return

Promise of Tencent Cloud NLP response.

### keywords(params)

alias `exec('KeywordsExtractionRequest', 'KeywordsExtraction', params)`

### summary(params)

alias `exec('AutoSummarizationRequest', 'AutoSummarization', params)`

### similar(params)

alias `exec('TextSimilarityRequest', 'TextSimilarity', params)`

## Example

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

## Questions & Suggestions

Please open an issue [here](https://github.com/axolo/egg-tencent-nlp/issues).

## License

[MIT](LICENSE)

[Tencent Cloud NLP]: https://cloud.tencent.com/document/product/271/35491
