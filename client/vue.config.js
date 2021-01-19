const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  outputDir: path.resolve(__dirname, '../dist/'),
  runtimeCompiler: true,
  transpileDependencies: [
    'vuetify',
  ],
  configureWebpack: {
    plugins: [
      new TerserPlugin(),
    ],
  },
};
