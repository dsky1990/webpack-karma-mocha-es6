/**
 * Created by dsky on 2017/3/22.
 */
/**
 * Created by dsky on 2017/3/20.
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
const filePath = JSON.parse(fs.readFileSync('../file.json', 'utf8'));
const buildSass = filePath.build.sass,
    buildCss = filePath.build.css,
    buildEs6 = filePath.build.es6,
    buildJs = filePath.build.js,
    buildIcon = filePath.build.icon,
    buildImg = filePath.build.img;

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
mkdirpSync(buildSass);
mkdirpSync(buildCss);
mkdirpSync(buildEs6);
mkdirpSync(buildJs);
mkdirpSync(buildIcon);
mkdirpSync(buildImg);

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.NODE_ENV)
}