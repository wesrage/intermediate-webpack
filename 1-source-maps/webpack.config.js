var path = require('path');

module.exports = {
    // devtool: 'eval',
    // devtool: 'cheap-eval-source-map',
    // devtool: 'cheap-source-map',
    // devtool: 'cheap-module-eval-source-map',
    // devtool: 'cheap-module-source-map',
    // devtool: 'eval-source-map',
    // devtool: 'source-map',
    // devtool: 'inline-source-map',
    // devtool: 'hidden-source-map',
    // devtool: 'nosources-source-map',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};
