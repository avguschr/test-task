const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    module: {
        rules: [
          // ... другие правила опущены
          {
            test: /\.css$/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  // включаем CSS модули
                  modules: true,
                  // настраиваем генерируемое имя класса
                  localIdentName: '[local]_[hash:base64:8]'
                }
              }
            ]
          }
        ]
      },
  plugins: [
    // убедитесь что подключили плагин!
    new VueLoaderPlugin()
  ]
}