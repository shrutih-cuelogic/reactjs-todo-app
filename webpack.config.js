// var webpack = require("webpack");
// var path = require("path"); // default node js library allow to resolve the path of app

// //copy everything which has been preapared for serving into the dist folder which doesn't exist but create automatically
// var DIST_DIR = path.resolve(__dirname, "dist");
// var SRC_DIR = path.resolve(__dirname, "src");

// var config = {
//     entry: SRC_DIR + "/app/index.js",
//     output: {
//         path: DIST_DIR ,
//         filename: "bundle.js",
//         publicPath: "/" //defines public server
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js?/,
//                 include: SRC_DIR,
//                 exclude: /node_modules/,
//                 loader: "babel-loader",
//                 query: {
//                     presets: ["react", "es2015", "stage-2"]
//                 }
//             }
//         ]
//     }
// };


// module.exports = config; // here it pull the data from webpack config

const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};