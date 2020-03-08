module.exports = {
  transpileDependencies: ["vuetify"],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: ["github"]
      },
      removeElectronJunk: false
    }
  }
};
