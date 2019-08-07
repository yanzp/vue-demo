const webpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
const webpack = require('webpack');
// 清理dist
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = merge(webpackConfig, {
    mode: 'production',
    devtool: 'cheap-source-map',
    module: {
        rules: [
            {
                test: /\.(c|le)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: true,
                            plugins: loader => [
                                autoprefixer({
                                    overrideBrowserslist: [
                                        "Android 4.1",
                                        "iOS 7.1",
                                        "Chrome > 31",
                                        "ff > 31",
                                        "ie >= 8"
                                      ]
                                })
                            ]
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[hash:5].css',
            chunkFilename: 'css/[id]-[hash:5].css'
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimizer: [
            // 压缩css
            new OptimizeCssAssetsWebpackPlugin({}),
            // 压缩js
            new TerserWebpackPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    }
})