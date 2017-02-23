/**
 * Created by dsky on 2016/12/22.
 */

// get filePath
const fs = require('fs');
const filePath = JSON.parse(fs.readFileSync('./file.json', 'utf8'));
const buildSass = filePath.build.sass;
const buildCss = filePath.buildCss;
const buildEs6 = filePath.buildEs6;
const buildJs = filePath.buildJs;
const buildIcon = filePath.buildIcon;
const buildImg = filePath.buildImg;
const distCss = filePath.distCss;
const distImg = filePath.distImg;
const distJs = filePath.distJs;

