/* eslint-disable no-console */
import path from 'path';
import webpack from 'webpack';

// helper functions
const resolveRoot = (...args) => path.resolve(__dirname, ...args);
const resolveSrc = () => path.resolve(__dirname, 'src');


module.exports = {
	devtool: 'cheap-module-inline-source-map',
	mode: 'development',
	entry: {
		app: resolveSrc(), // we can load third party library in a separate bundle
	},
	output: {
		path: resolveRoot('public'), // This is the output folder for webpack
		filename: 'js/bundle.min.js', // Output file goes inside js folder: so our output files resides in public/js/
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			include: resolveSrc(),
			exclude: resolveRoot('node_modules/'),
			use: 'babel-loader',
		},
		],
	},
	resolve: {

		extensions: ['.js', '.jsx',],
		alias: {
			'react-dom': '@hot-loader/react-dom',
		},

	},
	devServer: {
		contentBase: resolveRoot('public/'),
		host:'0.0.0.0',
		port: 9000,
		open: true,
		hot: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
};

