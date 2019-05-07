/* eslint-disable no-console */
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge'; // merge webpack config
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin'; // this will automatically insert the js file in index.html
const resolveRoot = (...args) => path.resolve(__dirname, ...args);
const resolveSrc = () => path.resolve(__dirname, 'src');


const commonConfig = {
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
		{
			test: /\.scss?$/,
			include: resolveSrc(),
			exclude: resolveRoot('node_modules'),
			use: [
				'style-loader', // creates style nodes from JS strings
				'css-loader', // translates CSS into CommonJS
				'sass-loader', // compiles Sass to CSS
			],
		},
		{
			test: /\.css?$/,
			include: resolveSrc(),
			exclude: resolveRoot('node_modules'),
			use: [
				'style-loader', // creates style nodes from JS strings
				'css-loader', // translates CSS into CommonJS
				'postcss-loader', // this will make sure to add css prefix support (webkit) for other browser
			],
		},
		],
	},
	// this will make sure all the node_modules is separate from main.js file
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all',
				},
			},
		},
	},
	plugins: [
		// this will see the output path of webpack and copy index.html to that place
		new HtmlWebpackPlugin({
			template: resolveRoot('public/index.html'),
			inject: 'body',
		}),
		new CopyWebpackPlugin([{
			from: resolveRoot('public/'),
			to: resolveRoot('dist/'),
		}, ]),
	],

	resolve: {
		modules: [
			resolveRoot('node_modules'),
			resolveSrc(),
		],
		extensions: ['.js', '.jsx', '.json', '.css', '.scss', ],
		alias: {
			'react-dom': '@hot-loader/react-dom',
			// to use alias support in Webstorm we have to mark src as mark directory as resource root
			'src': resolveSrc(),
		},

	},
};

const devConfig = merge(commonConfig, {
	devtool: 'cheap-module-inline-source-map',
	mode: 'development',
	devServer: {
		contentBase: resolveRoot('public/'),
		stats: 'minimal',
		port: 9000,
		// open: true,
		historyApiFallback: true,
		disableHostCheck: true,
		hot: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
});
const prodConfig = merge(commonConfig, {
	devtool: 'source-map',
	mode: 'production',
});


module.exports = (env) => {
	console.log('Application is running in ' + env.NODE_ENV);
	return env.NODE_ENV === 'development' ? devConfig : prodConfig;
};
