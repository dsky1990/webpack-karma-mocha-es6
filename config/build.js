/**
 * Created by dsky on 2017/3/20.
 */

// get filePath
const fs = require('fs'),
    path = require('path'),
    StyleLintPlugin = require('stylelint-webpack-plugin');

//get floder path
const filePath = JSON.parse(fs.readFileSync('./file.json', 'utf8'));
const buildSass = filePath.build.sass,
    buildCss = filePath.build.css,
    buildEs6 = filePath.build.es6,
    buildJs = filePath.build.js,
    buildIcon = filePath.build.icon,
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
mkdirpSync(buildSass);
mkdirpSync(buildCss);
mkdirpSync(buildEs6);
mkdirpSync(buildJs);
mkdirpSync(buildIcon);
mkdirpSync(buildImg);
mkdirpSync(distCss);
mkdirpSync(distImg);
mkdirpSync(distJs);
