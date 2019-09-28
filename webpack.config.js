const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    mode: 'development',
    //entry: './src/pages/main/js/index.js',
    entry: './src/block/header/js/index.js',
    output: {
        filename: './js/index.js',
        path: path.resolve(__dirname, '/dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: './css/style.css',
            chunkFilename: 'chunk-[id].scss',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            // template: './src/pages/main/index.pug',
            template: './src/block/header/index.pug',
            inject: true
        }),
        new CopyWebpackPlugin([{
            from: path.join(__dirname, './pages/main/img/'), 
            to: "img" }], {
                
            }),
        new UglifyJsPlugin()
    ],
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // you can specify a publicPath here
                        // by default it uses publicPath in webpackOptions.output
                        publicPath: './css/',
                        hmr: process.env.NODE_ENV === 'development',
                    },
                },
                'css-loader',
                'sass-loader',
            ]
        },{ 
            test: /\.pug$/,
            use: [
                'html-loader?minimize=false', 
                'pug-html-loader?pretty=true'  
            ],
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 9000
    }
};