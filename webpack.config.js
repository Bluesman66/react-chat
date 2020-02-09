const webpack = require('webpack');
const path = require('path');
const outputPath = path.resolve(__dirname, './dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackConfig = {
	entry: {
		app: [
			'react-hot-loader/patch',
			path.resolve(__dirname, './src/index.js')
		],
		vendors: [
			'react',
			'react-dom'
		]
	},
	output: {
		path: outputPath,
		filename: '[name].js'
	},
	module: {
		rules: [
			// {
			// 	test: /\.js$/,
			// 	exclude: /node_modules/,
			// 	enforce: 'pre',
			// 	use: 'eslint-loader'
			// },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(gif|png|jpg|jpeg|svg)$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, './src/assets/'),
				use: 'url-loader?limit=10000&name=assets/[name]-[hash].[ext]'
			}
		]
	},
	resolve: {
		alias: {
			'components': path.resolve(__dirname, './src/components'),
			'containers': path.resolve(__dirname, './src/containers'),
			'actions': path.resolve(__dirname, './src/actions'),
			'reducers': path.resolve(__dirname, './src/reducers'),
			'store': path.resolve(__dirname, './src/store'),
			'assets': path.resolve(__dirname, './src/assets'),
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/assets/index.html'),
			filename: 'index.html',
			path: outputPath
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: outputPath,
		port: 9200,
		historyApiFallback: true,
		inline: true,
		hot: true,
		host: '0.0.0.0'
	}
}

if (process.env.NODE_DEV === 'production') {
	webpackConfig.concat({
		optimization: {
			minimizer: [
				new UglifyJsPlugin({
					uglifyOptions: {
						warnings: false,
						parse: {},
						compress: {},
						mangle: true, // Note `mangle.properties` is `false` by default.
						output: null,
						toplevel: false,
						nameCache: null,
						ie8: false,
						keep_fnames: false,
					}
				})
			]
		},
		plugins: [new MiniCssExtractPlugin()],
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: [MiniCssExtractPlugin.loader, 'css-loader'],
				},
			],
		}
	})
}

module.exports = webpackConfig;