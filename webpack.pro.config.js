const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
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
            include:/src/,
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
        new webpack.DllReferencePlugin({
            manifest:require(path.join(__dirname,'lib','manifest.json'))
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './public/index.html'),
        }),
        new AddAssetHtmlPlugin({ 
            filepath: path.resolve('./lib/vendors.js')
        }),
    ]
}