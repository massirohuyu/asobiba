module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/heatmap.js`,

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/docs/javascripts`,
    // 出力ファイル名
    filename: "heatmap.js"
  },

  mode: "development" // 本番時はproductionになるようにする。
};