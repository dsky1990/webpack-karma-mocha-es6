/**
 * Created by dsky on 2016/12/22.
 */
const fs = require('fs');
const fileStr = (fs.readFileSync('./entry-file.js', 'utf8')).replace(/\s+/g,"").replace(';','');
const filePath = JSON.parse(fileStr.substring(fileStr.indexOf('=')+1));
console.log("buildSass", filePath.buildSass);

