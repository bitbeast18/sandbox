const MonacoEditorPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  transpileDependencies: ["vuetify"],

  configureWebpack: {
    plugins: [
      new MonacoEditorPlugin({
        languages: ['c', 'cpp', 'java', 'python', 'javascript', 'html', 'css'],
        features: ['!gotoSymbol']
      })
    ]

  },

  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: ["github"]
      },
      removeElectronJunk: false
    }
  }
};
