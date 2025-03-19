const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',  // Entry point of your application
  output: {
    filename: 'bundle.js',  // Output bundle file
    path: path.resolve(__dirname, 'dist'),  // Output directory
    publicPath: '/',
  },
  mode: 'development',  // Set mode to development or production
  devServer: {
    static: './dist',  // Serve static files from the dist directory
    hot: true,  // Enable hot module replacement
  },
  plugins: [
    new HtmlWebpackPlugin({
        template:  './src/pages/mobile/m_index.html',
    }),
  ],
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                }
            }
        }
    ],
  },
};