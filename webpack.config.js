const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/app.js',
    ],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'app.bundle.js',
    },
    devServer: {
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 8003,
        disableHostCheck: true
    },
	module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				},
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
    ],
};
