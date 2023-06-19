
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename : 'bundle.js',
        path: path.resolve(__dirname,'dist'),
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin(), new MiniCssExtractPlugin()],
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
}