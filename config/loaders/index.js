
const addJsLoader = require('./js-loader'),
    addCssLoader = require('./css-loader');

function addLoaders(webpackConfig) {

    webpackConfig.module =  webpackConfig.module || {};
    webpackConfig.module.rules = webpackConfig.module.rules || [];

    addJsLoader(webpackConfig);
    addCssLoader(webpackConfig);

    webpackConfig.module.rules.push({
        test: /\.(html)$/,
        use: {
            loader: 'html-loader',
            options: {
                attrs: [':data-src'],
                minimize: true
            }
        }
    }, {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: {
            loader: 'file-loader',
            options: {
                name: 'assets/[name].[ext]'
            }
        }
    }, {
        test: /\.xml$/,
        use: [
            'xml-loader'
        ]
    });
}

module.exports = addLoaders;