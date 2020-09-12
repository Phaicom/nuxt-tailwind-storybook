const path = require('path')

module.exports = ({ config }) => {
  config.resolve.extensions.push('.js', '.vue', '.css', '.html')

  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, '../'),
    '~': path.resolve(__dirname, '../'),
  }

  config.module.rules.push({
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          config: {
            path: './.storybook/',
          },
        },
      },
    ],

    include: path.resolve(__dirname, '../'),
  })

  return config
}
