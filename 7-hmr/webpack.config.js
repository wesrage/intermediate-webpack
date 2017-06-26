var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './src/main.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
};
