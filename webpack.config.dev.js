const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, "src")
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    target: 'web',
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new Dotenv()

    ],
    module: {
        rules: [
            //for jsx loader
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
            //for sass loader
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
    //options for resolving module requests
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')
        ],
        extensions: ['.js', '.jsx', '.json', '.css', '.sass'],
        alias: {
            mock_api: path.resolve(__dirname, 'src/api/mock_api'),
            Root: path.resolve(__dirname, 'src/Root.jsx'),
            actions: path.resolve(__dirname, 'src/actions'),
            components: path.resolve(__dirname, 'src/components'),
            config: path.resolve(__dirname, 'src/config'),
            containers: path.resolve(__dirname, 'src/containers'),
            reducers: path.resolve(__dirname, 'src/reducers'),
            store: path.resolve(__dirname, 'src/store'),
            tests: path.resolve(__dirname, 'src/tests'),
            utils: path.resolve(__dirname, 'src/utils'),
            tools: path.resolve(__dirname, 'tools'),
            api: path.resolve(__dirname, 'src/api'),


        }

    }

};