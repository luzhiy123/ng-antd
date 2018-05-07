const HtmlWebpackPlugin = require('html-webpack-plugin'),
    perfectConfig = require('./config/index');

const webpackConfig = {
    devtool: 'inline-source-map',
    entry: {
        main: './test/src/ng/index.js',
        index2: './test/src/ng/index2.js',
        react: './test/src/react/index.jsx',
        react2: './test/src/react/react2.jsx'
    },
    devServer: {
        contentBase: './dist',
        publicPath: '/home/',
        historyApiFallback: {
            index: '/home/'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['ng-vendor', 'commons', 'main'],
            template: './test/src/ng/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['ng-vendor', 'commons', 'index2'],
            template: './test/src/ng/index.html',
            filename: 'index2.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['react-vendor', 'commons', 'react'],
            template: './test/src/react/index.html',
            filename: 'react.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['react-vendor', 'commons', 'react2'],
            template: './test/src/react/index.html',
            filename: 'react2.html'
        })
    ],
    optimization: {
        minimize: false
    }
};

perfectConfig(webpackConfig);

module.exports = webpackConfig;