const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const dev = process.env.NODE_ENV === 'dev';

const env = require('./environment.js');
const ENVIRONMENT = dev ? env.LOCAL : env.PRODUCTION;

let plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({}),
    new HtmlWebpackPlugin({
        hash: true,
        inject: false,
        environment: ENVIRONMENT,
        template: 'ejs-loader!app/index.ejs'
    }),
    new ExtractTextPlugin('app.css'),
    new webpack.DefinePlugin({
        __commitHash__: JSON.stringify(process.env.COMMIT_HASH),
    })
];

module.exports = {
    context: __dirname,
    entry: './index.js',
    devtool: dev ? 'inline-source-map' : false,
    output: {
        path: __dirname + '/dist/',
        filename: 'elconversor.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css', '.png']
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader!css-loader')
            },
            {
                test: /\.(png)$/i,
                loader: 'file-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015', 'stage-2'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy'],
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: plugins
};
