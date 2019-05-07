/* eslint-disable no-console */
import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const commonConfig = {
	entry: path.resolve(__dirname, 'src'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: [
					path.resolve(__dirname, 'src')
				],
				exclude: [
					path.resolve(__dirname, 'node_modules/')
				],
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss?$/,
				include: [
					path.resolve(__dirname, 'src')
				],
				exclude: [
					path.resolve(__dirname, 'node_modules')
				],
				use: [{
					loader: 'style-loader' // creates style nodes from JS strings
				}, {
					loader: 'css-loader' // translates CSS into CommonJS
				}, {
					loader: 'sass-loader' // compiles Sass to CSS
				}]
			},
			{
				test: /\.css?$/,
				include: [
					path.resolve(__dirname, 'src')
				],
				exclude: [
					path.resolve(__dirname, 'node_modules')
				],
				use: [{
					loader: 'style-loader' // creates style nodes from JS strings
				}, {
					loader: 'css-loader' // translates CSS into CommonJS
				}]
			}
		]
	},
	plugins: [
		// this will see the output path of webpack and copy index.html to that place
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			inject: 'body'
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, 'public/'),
				to: path.resolve(__dirname, 'dist/')
			}
		])
	],

	resolve: {
		modules: [
			path.resolve(__dirname, 'node_modules'),
			path.resolve(__dirname, 'src')
		],
		extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
		alias: {
			'react-dom': '@hot-loader/react-dom',
			// to use alias support in Webstorm we have to mark src as mark directory as resource root
			'src': path.resolve(__dirname, 'src')
		}

	}
};

const devConfig = merge(commonConfig, {
	devtool: 'cheap-module-inline-source-map',
	mode: 'development',
	devServer: {
		contentBase: path.resolve(__dirname, 'public/'),
		stats: 'minimal',
		port: 9000,
		open: true,
		historyApiFallback: true,
		disableHostCheck: true,
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
});
const prodConfig = merge(commonConfig, {
	devtool: 'source-map',
	mode: 'production'
});


module.exports = (env) => {
	console.log('Application is running in ' + env.NODE_ENV);
	return env.NODE_ENV === 'development' ? devConfig : prodConfig;
};
