/* eslint-disable no-console */
import path from  'path';
import webpack from  'webpack';
import Dotenv from  'dotenv-webpack';
import LodashModuleReplacementPlugin from  'lodash-webpack-plugin';
import ExtractTextPlugin from  'extract-text-webpack-plugin';
import CopyWebpackPlugin from  'copy-webpack-plugin';

const env = process.env.NODE_ENV || 'production';
console.log(`Application running in ${env} mode`);
const dev = env === 'development';
module.exports = {
	entry: dev
		? [
			'webpack-hot-middleware/client?reload=true',
			'react-hot-loader/patch',
			path.resolve(__dirname, 'src')
		] : path.resolve(__dirname, 'src'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
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
		new LodashModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new Dotenv()

	] : [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new ExtractTextPlugin('styles.css'),
		new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
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
				use: dev ? ['react-hot-loader/webpack', 'babel-loader'] : 'babel-loader'
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
					loader: 'style-loader' // creates style nodes from JS strings
				}, {
					loader: 'css-loader' // translates CSS into CommonJS
				}, {
					loader: 'sass-loader' // compiles Sass to CSS
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
					loader: 'style-loader' // creates style nodes from JS strings
				}, {
					loader: 'css-loader' // translates CSS into CommonJS
				}
				]
			}
		]
	},
	resolve: {
		modules: [
			path.resolve(__dirname, 'node_modules'),
			path.resolve(__dirname, 'src')
		],
		extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
		alias: {
			// to use alias support in Webstorm we have to mark src as mark directory as resource root
			mock_api: path.resolve(__dirname, 'src/api/mock_api')
		}

	}

};
