/**
 * Created by amamiryoin on 2017/5/24.
 */
let webpack = require("webpack");
let path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry:__dirname+"/public/javascripts/components/app.js",
    output:{
        path:path.resolve(__dirname,"build"),
        filename:"bundle.js"
    },
    devServer:{
        inline:true,
        port:8081
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use:'babel-loader'
            },
            {
                test:/\.less$/,
                use:[
                'less-loader',
                'style-loader',
                'css-loader'
                ]
            },
            {
                test:/\.css$/,
                use:[
                'style-loader',
                'css-loader'
                ]
            }
        ],
    }
}