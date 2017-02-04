var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin'); //copy文件到输出目录

var config = {
    //页面入口文件配置
    entry: {
        app: ['./src/app/index.js']
    },
    output: {
        path: __dirname + '/dist/',
        contentBase: 'dist/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './src/index.html', to: './index.html'},
            {from: './src/app/assets/css/style.css', to: './style.css'}
        ])
    ]
};

module.exports = config;