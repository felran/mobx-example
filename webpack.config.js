const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode:'development',
    entry:[
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname,'./src/index.js')
    ],
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/'
    },
    devtool:'inline-source-map',
    module:{
        rules:[{
            test:/\.js$/,
            include:/app/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['react','env','stage-1'],
                    plugins: ["react-hot-loader/babel","transform-decorators-legacy", "transform-runtime"]
                },
            }
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './public/index.html'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}