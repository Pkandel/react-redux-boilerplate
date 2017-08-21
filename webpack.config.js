/* eslint-disable no-console */
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const env = process.env.NODE_ENV || "production";
console.log(`Application running in ${env} mode`);
/*
    to send a production variable, we have to generate production before
    application statrs like NODE_ENV=production npm start
    other env variable we can use from .env file
*/
const dev = env === "development";

module.exports = {
    entry: dev
        ? [
            'webpack-hot-middleware/client?reload=true',
            path.resolve(__dirname, "src")
        ] : path.resolve(__dirname, "src"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, dev ? 'src' : 'dist')

    },
    target: 'web',
    devtool: dev ? 'cheap-module-inline-source-map' : 'source-map',
    plugins: dev ? [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new LodashModuleReplacementPlugin,
        new Dotenv()

    ] : [
            new webpack.optimize.OccurrenceOrderPlugin(),
            new ExtractTextPlugin("styles.css"),
            new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
            new CopyWebpackPlugin([
                { from: 'public/', to: './' }
            ]),
            new Dotenv()
        ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules/'),
                    path.resolve(__dirname, 'dist/')
                ],
                use: [
                    'react-hot-loader',
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.scss?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'build')
                ],
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }
                ]
            },
            {
                test: /\.css?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'build')
                ],
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }
                ]
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')
        ],
        extensions: ['.js', '.jsx', '.json', '.css', '.sass'],
        alias: {
            //to use alias support in Webstorm we have to mark src as mark directory as resource root
            mock_api: path.resolve(__dirname, 'src/api/mock_api'),
            actions: path.resolve(__dirname, 'src/actions'),
            components: path.resolve(__dirname, 'src/components'),
            config: path.resolve(__dirname, 'src/config'),
            containers: path.resolve(__dirname, 'src/containers'),
            reducers: path.resolve(__dirname, 'src/reducers'),
            store: path.resolve(__dirname, 'src/store'),
            tests: path.resolve(__dirname, 'src/tests'),
            utils: path.resolve(__dirname, 'src/utils'),
            api: path.resolve(__dirname, 'src/api'),
        }

    }

};
