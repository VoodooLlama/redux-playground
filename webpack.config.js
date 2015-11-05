/* eslint-env node */
/* eslint-disable object-shorthand */

var path = require('path');
var sourceDir = process.cwd();
var jsDir = path.join(__dirname, '/app/js');
var webpack = require('webpack');

module.exports = {
	entry: path.join(jsDir, 'routes.js'),

	output: {
		path: path.join(__dirname, '/app'),
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader?modules=amd&stage=0'
			},
			{
				test: /\.json?$/,
				loader: 'json'
			}
		]
	},

	resolve: {
		root: [
			sourceDir + '/app/js'
		]
	},

	plugins: [
		new webpack.ProvidePlugin({
			React: 'react',
			ReactWithAddons: 'react/addons',
			define: 'amdefine'
		})
	]
};
