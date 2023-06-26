
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimazerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename : 'bundle.js',
        path: path.resolve(__dirname,'dist'),
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html'
    }), new MiniCssExtractPlugin(), new CssMinimazerWebpackPlugin()],
    optimization: {
        minimizer: [new CssMinimazerWebpackPlugin()],
        minimize:true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      esModule: true,
                    },
                  },'css-loader'],
            },
        ],
    },
    devServer: {
        port: 3000,
    }
};