module.exports = {
  publicPath: '/lcd-gen/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "LCD Character Generator";
        return args;
      })
  }
}