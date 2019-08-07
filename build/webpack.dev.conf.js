/**
 * 开发环境配置文件，注重调试效率
 * 
 * 打包处理css和less文件，设置sourceMap方便定位调试
 * postcss-loader自动添加前缀
 * 配置devServer开启热更新功能
 */
const webpackConfig = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = merge(webpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        port: 9090,
        overlay: {
            warnings: true,
            errors: true
        },
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(c|le)ss$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
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
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new OpenBrowserPlugin()
    ]
})