const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: false,
    entry: {
        bundle: path.resolve(__dirname, 'assets/src/js'),
    },
    output: {
        path: path.resolve(__dirname, 'assets/dist'), // Update the output path
        filename: 'js/main.min.js',
        clean: true,
        assetModuleFilename: "[name][ext]",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'assets/src/scss'), // Update the SCSS path
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
        ],
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true, // Remove console.* statements
                    },
                    output: {
                        comments: false, // Remove comments
                    },
                },
                // include: '/assets/dist/js/bundle.min.js',
                // assets/dist/js/bundle.min.js -o assets/dist/js/bundle.min.js
            }),
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'assets/src/img'), // Source directory
                    to: path.resolve(__dirname, 'assets/dist/img'),  // Destination directory
                },
            ],
        }),
        new HtmlWebpackPlugin({
            title: "Webpack App",
            filename: "index.html", // Update the HTML output path
            template: "assets/src/template.html", // Update the HTML template path
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.min.css', // Update the CSS output path
        }),
    ],
};
