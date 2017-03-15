/**
 * Created by dsky on 2016/12/22.
 */

// get filePath
const fs = require('fs');

const filePath = JSON.parse(fs.readFileSync('./file.json', 'utf8'));
const buildSass = filePath.build.sass;
const buildCss = filePath.build.css;
const buildEs6 = filePath.build.es6;
const buildJs = filePath.build.js;
const buildIcon = filePath.build.icon;
const buildImg = filePath.build.img;
const distCss = filePath.dist.css;
const distImg = filePath.dist.img;
const distJs = filePath.dist.js;

