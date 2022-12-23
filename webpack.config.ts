const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.ts',
    externals: [nodeExternals()],
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
