const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:"development",
  entry: {
    main: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader'],
      },
    ]
  },
  devServer: {
    port: 5500,
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, "index.html"),
  })],
}