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
		path: resolveRoot('dist'), // We are using webpack-dev-server in dev, so this path is used on production: build file will be sent inside dist folder
		filename: 'js/[name].js', // Output file goes inside js folder: so our output files resides in dist/js/
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
		port: 9000,
		open: true,
		hot: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
};

