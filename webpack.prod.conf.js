/**
 * Created by dsky on 2017/3/17.
 */

/*
* production config
* js compress
* css compress
* img compress
* file sourcemap
*/
const webpackMerge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');
module.exports = webpackMerge(baseConf, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
});