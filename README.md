# webpack-karma-mocha-es6
a tool to build project with webpack + es6 and test with karma + mocha

## install
```
npm install -g karma
npm install
```

## create folder in file.json

```json
// we can creat the folder by the file.json, such as:
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
## build step
> the config folder contains all the config file, the test folder contains all the test file

### we can run the dev server like this

```
npm run dev
```

### then we can test the code

```
npm run test
```

### release code

```
npm run build
```


