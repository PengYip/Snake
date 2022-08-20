const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { Template, webpack } = require('webpack');
module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: [{
                loader: 'html-loader'
            }]
        },
        {
            test: /\.ts$/,
            use: [
                {
                    loader: "babel-loader",
                    options: {
                        presets: [[
                            "@babel/preset-env",
                            {
                                targets: {
                                    chrome: "88",
                                    ie: "11"
                                },
                                corejs: "3",
                                useBuiltIns: "usage"
                            }
                        ]]
                    }
                },
                'ts-loader'
            ],

            exclude: /node_modules/
        },
        {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                [
                                    'postcss-preset-env',
                                    {
                                        browsers: 'last 2 versions'
                                    }
                                ]
                            ]
                        }
                    }
                },
                'less-loader'
            ]
        }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title: '自动生成',
            filename: 'index.html',
            template: './src/index.html'
        }),

    ],
    mode: 'development',
    devServer: {
        open: true
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};