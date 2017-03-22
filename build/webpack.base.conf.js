/**
 * Created by dsky on 2017/3/17.
 */

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