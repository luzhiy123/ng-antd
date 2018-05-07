
function addJsLoaders(webpackConfig) {
    webpackConfig.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
            loader: 'ng-annotate-loader',
            options: {
                ngAnnotate: 'ng-annotate-patched',
            }
        }, {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }]
    }, {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [{
            loader: 'babel-loader',
            options: {
                plugins: [
                    [
                        'import',
                        {
                            'libraryName': 'antd',
                            'libraryDirectory': 'es',
                            'style': 'css'
                        }
                    ]
                ],
                presets: ['@babel/preset-react', '@babel/preset-env']
            }
        }]
    });

}

module.exports = addJsLoaders;