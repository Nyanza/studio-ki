const path = require('path');
const webpack = require('webpack');
const ROOT_PATH = path.resolve(__dirname);
const OUTPUT_PATH = path.resolve(ROOT_PATH, 'dist');
const TEMPLATE_PATH = path.resolve(ROOT_PATH, 'index.html');
const ENTRY_PATH = path.resolve(ROOT_PATH, 'src/index.jsx');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: ENTRY_PATH,
	output: {
		filename: 'bundle.js',
		path: OUTPUT_PATH,
		publicPath: 'dist/'
	},
	plugins: [
		new webpack.DefinePlugin({
			API_HOST: JSON.stringify('http://localhost:8000')
		})
	],
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: [
			'jshint-loader',
			{
				loader: 'babel-loader',
				options: {
					presets: [
					['es2015', { modules: false }],
					'react'
					]
				}
			}
			]
		},
		{
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		},
		{
			test: /\.(png|jpeg|gif|ttf|jpg|php)$/,
			use: [
				{ loader: 'url-loader', options: {} }
			]
		}
	]
	}
};
