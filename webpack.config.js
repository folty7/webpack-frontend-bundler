const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: false,
    entry: {
        bundle: path.resolve(__dirname, 'assets/src/js/index.js'), // Update the entry path
    },
    output: {
        path: path.resolve(__dirname, 'assets/dist'), // Update the output path
        filename: 'js/[name].js',
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
                include: path.resolve(__dirname, 'assets/src/styles'), // Update the SCSS path
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
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack App",
            filename: "index.html", // Update the HTML output path
            template: "assets/src/template.html", // Update the HTML template path
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/main.css', // Update the CSS output path
        }),
    ],
};
