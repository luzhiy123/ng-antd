const ExtractTextPlugin = require('extract-text-webpack-plugin');

function addCssLoaders(webpackConfig) {
    webpackConfig.plugins.push(
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath('css/[name].[hash].css').replace('css/js', 'css');
            },
            allChunks: true
        })
    );

    webpackConfig.module.rules.push({
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader'],
            publicPath: '../'
        })
    }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader',
            publicPath: '../'
        })
    });
}

module.exports = addCssLoaders;