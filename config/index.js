const splitChunks = require('./split-chunks'),
    addLoaders = require('./loaders/index');

function perfectConfig(webpackConfig) {
    splitChunks(webpackConfig);
    addLoaders(webpackConfig);
}

module.exports = perfectConfig;