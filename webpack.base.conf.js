/**
 * Created by dsky on 2017/3/17.
 */

// get filePath
const fs = require('fs'),
    path = require('path'),
    StyleLintPlugin = require('stylelint-webpack-plugin');;

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

/*
* base config
* base rules and plugin
* load css
*
*/
module.exports = {
    entry: {
        index: '',
        vendor: ''
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.reslove(_dirname, build)
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: 'inline',
                            plugins: function () {
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
        }),
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            minChunks: Infinity,
        }),
        new webpack.HashedModuleIdsPlugin(),
        new WebpackChunkHash(),
        new ChunkManifestPlugin({
            filename: "chunk-manifest.json",
            manifestVariable: "webpackManifest"
        }),
        function() {
            this.plugin("done", function(stats) {
                fs.writeFileSync(
                    path.join(__dirname, build, "stats.json"),
                    JSON.stringify(stats.toJson()));
            });
        }
    ]
};