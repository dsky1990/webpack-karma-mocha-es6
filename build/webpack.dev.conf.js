/**
 * Created by dsky on 2017/3/17.
 */
/*
* development config
* vue to js
* eslint
* sass to css
* es6 to js
* stylelint
*/
const webpackMerge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');
module.exports = webpackMerge(baseConf, {
    devtool: '#cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                enforce: "pre",
                test: /\.(js|vue)$/,
                exclude: /node_modules/,
                use: {
                    loader: "eslint-loader",
                    options: {
                        cache : true,
                        quiet: true,
                        failOnError: true
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['es2015', {modules: false}]],
                        plugins: [
                            'syntax-dynamic-import',
                            'transform-async-to-generator',
                            'transform-regenerator',
                            'transform-runtime'
                        ]
                    }
                }
            },
            {
                test: /.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new StyleLintPlugin()
    ]
});
