const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const File

module.exports = {
  entry: './src/pages/main/js/index.js',
  output: {
    filename: './js/index.js',
    path: path.resolve(__dirname, 'dist')
  },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: './css/style.css',
            chunkFilename: 'chunk-[id].scss',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/pages/main/index.pug',
            inject: true
        }),
    ],
    module: {
        rules: [
            {
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
            },

            { 
                test: /\.pug$/,
                use: [
                    'html-loader?minimize=false', 
                    'pug-html-loader?pretty=true'  
                ],
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        outputPath: './img/',
                        options: {
                            name: './img/[name].[ext]',
                            useRelativePath: true          
                        }
                    },
                ],
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
      }
};