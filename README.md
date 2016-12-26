# webpack-karma-mocha-es6
a tool to build project and test with webpack + karma + mocha + es6

## install
```
npm install -g karma
npm install
```

## create folder in file.json

```json
// build is the dev folder, dist is release folder
{
  "build": {
    "js": "build/js",
    "sass": "build/sass",
    "img": "build/img",
    "css": "build/css",
    "es6": "build/es6"
  },
  "dist": {
    "js": "dist/js",
    "css": "dist/css",
    "img": "dist/img"
  }
}
```