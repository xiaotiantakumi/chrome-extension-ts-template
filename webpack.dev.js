const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtensionReloader = require('webpack-extension-reloader');

module.exports = (env, argv) => {
  return merge(
    common,
    {
      mode: 'development',
      devtool: 'inline-source-map',
      plugins: [
        // watch モードのみ Hot Reload を有効化
        //  https://github.com/webpack/webpack/issues/6460#issuecomment-364252873
        //  https://github.com/webpack/webpack/issues/6460#issuecomment-386947990
        (argv.watch || argv.w) ? (new ExtensionReloader({
          port: 9090,
          reloadPage: true,
          manifest: path.resolve(__dirname, 'src', 'manifest.json'),
          entries: {
            contentScript: [
              'content',
            ],
            background: [
              'background',
            ],
            extensionPage: [
              'options',
            ],
          },
        })) : false,
      ].filter(Boolean),
    }
  );
};
