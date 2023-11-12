const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: false,
    entry: {
        bundle: path.resolve(__dirname, 'assets/src/js'),
    },
    output: {
        path: path.resolve(__dirname, 'assets/dist'),
        filename: 'js/main.min.js',
        clean: true,
        assetModuleFilename: "[name][ext]",
    },
    // ... (other configuration remains the same)
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/main.min.css', // Update the CSS output path
        }),
    ],
};
