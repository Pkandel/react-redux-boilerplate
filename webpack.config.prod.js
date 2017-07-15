const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const GLOBALS = {
    'process.env.NODE_ENV' : JSON.stringify('production')
};

module.exports = {
    entry: [
        path.resolve(__dirname, "src")
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/static/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },
    target: 'web',
    devtool: 'sorce-map',
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new ExtractTextPlugin('style.css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
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
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'build')
                ],
                use: ['react-hot-loader',
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            //for sass loader
            {
                test: /\.scss?$/,
                include: [ path.resolve(__dirname, 'src') ],
                use: { loader: ExtractTextPlugin.extract("css?sourceMap")}

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
            Root: path.resolve(__dirname, 'src/Root.jsx')
        }

    }

};