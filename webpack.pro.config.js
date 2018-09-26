const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode:'production',
    entry:[
        path.resolve(__dirname,'./src/index.js')
    ],
    output:{
        filename:'[name][hash].js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/'
    },
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
        // new webpack.DllPlugin({
        //     context:__dirname,
        //     name:'dll_[name].js',
        //     path:path.resolve(__dirname,'manifest.json')
        // }),
        // new webpack.DllReferencePlugin({
        //     context:__dirname,
        //     manifest:require('./manifest.json'),
        // }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './public/index.html'),
        }),
    ]
}