const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.ts$/,
                exclude: __dirname + '/node_modules'
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            __dirname,
            __dirname + '/src',
            __dirname + '/node_modules'
            
        ],
    },
    plugins: [
        new NodemonPlugin(),
    ],
    target: 'node',
}