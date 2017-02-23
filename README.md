# webpack-karma-mocha-es6
a tool to build project with webpack + es6 and test with karma + mocha

## install
```
npm install -g karma
npm install
```

## create folder in file.json

```json
// build is the dev folder, dist is the release folder
{
  "build": {
    "sass": "build/sass",
    "css": "build/css",
    "icon": "build/icon"
    "img": "build/img",
    "es6": "build/es6",
    "js": "build/js"
  },
  "dist": {
    "js": "dist/js",
    "css": "dist/css",
    "img": "dist/img"
  }
}
```