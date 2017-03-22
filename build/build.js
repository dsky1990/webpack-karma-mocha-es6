/**
 * Created by dsky on 2017/3/22.
 */
const fs = require('fs'),
    path = require('path'),
    StyleLintPlugin = require('stylelint-webpack-plugin'),
    webpack = require('webpack'),
    webpackConf = require('./webpack.dev.conf'),
    express = require('express'),
    app = express(),
    compiler = webpack(webpackConf),
    devMiddleware = require('webpack-dev-middleware')(compiler, {
        publicPath: webpackConfig.output.publicPath,
        quite: true
    }),
    hotMiddleware = require('webpack-hot-middleware')(compiler, {
        log: () => {}
    }),
    config = require('../config');
// get filePath

//get floder path
const filePath = JSON.parse(fs.readFileSync('./file.json', 'utf8'));
const buildCss = filePath.build.css,
    buildJs = filePath.build.js,
    buildImg = filePath.build.img,
    distCss = filePath.dist.css,
    distImg = filePath.dist.img,
    distJs = filePath.dist.js;

// mkdir fun
const mkdirSync = function (path) {
    if(path){
        try {
            fs.mkdirSync(path);
        } catch(e) {
            if ( e.code != 'EEXIST' ) throw e;
        }
    }
};

const mkdirpSync = function (dirpath) {
    if(dirpath){
        const parts = dirpath.split(path.sep);
        const len = parts.length;
        for( let i = 1; i <= len ; i++ ) {
            mkdirSync( path.join.apply(null, parts.slice(0, i)) );
        }
    }
};
// creat floder
mkdirpSync(distCss);
mkdirpSync(distImg);
mkdirpSync(distJs);