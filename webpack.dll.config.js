const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode:'production',
    entry:{
        vendors:['react','react-dom','mobx','mobx-react']
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'lib'),
        library:'[name]'
    },
    plugins:[
        new webpack.DllPlugin({
            name:'[name].js',
            path:path.join(__dirname,'lib','manifest.json')
        }),
    ]
}