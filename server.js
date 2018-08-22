
const koa = require('koa');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');
const Router = require('koa-router');
const Static = require('koa-static');
const config = require('./webpack.config.js');

const router = new Router();
const app = new koa();
const compiler = webpack(config);

const devMiddleware = webpackDevMiddleware(compiler,{
    publicPath:config.output.publicPath,
    // quiet: true
});
const hotMiddleware = webpackHotMiddleware(compiler,{});

const staticFile = Static(path.join( __dirname,  'dist'));
app.use(devMiddleware);
app.use(hotMiddleware);
app.use(staticFile);
app.listen(3000,function(){
    console.log('Uploader app listen on port 3000\n');
});