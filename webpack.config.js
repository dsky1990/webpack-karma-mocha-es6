/**
 * Created by dsky on 2016/12/22.
 */

// get filePath
const fs = require('fs');
const fileStr = (fs.readFileSync('./entry-file.js', 'utf8')).replace(/\s+/g,"").replace(';','');
const filePath = JSON.parse(fileStr.substring(fileStr.indexOf('=')+1));
const buildSass = filePath.buildSass;
const buildCss = filePath.buildCss;
const buildEs6 = filePath.buildEs6;
const buildJs = filePath.buildJs;
const buildIcon = filePath.buildIcon;
const buildImg = filePath.buildImg;
const distCss = filePath.distCss;
const distImg = filePath.distImg;
const distJs = filePath.distJs;

