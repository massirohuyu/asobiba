開発メモ
===

Nodo.jsを入れる
---

https://nodejs.org/ja/download/

ここで「windows installer」をえらぶ。chocolateryいれた。

expressパッケージをインストールしてサーバー立ち上げ
---

プロジェクトフォルダにpackage.json作る＆expressパッケージをインストール

```
npm init # 設定 script.jsをメインにして、script のstartに "node script.js" と書く
npm install express --save-dev
```

script.jsを作成
```
'use strict';
const express = require('express');
const app = express();
app.use(express.static('./website'));
app.listen(8001, ()=> {
  console.log('Express Server');
});
```

実行
```
npm start
```
