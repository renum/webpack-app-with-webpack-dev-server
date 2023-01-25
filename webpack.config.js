// webpack.config.js
const path = require( 'path' );
const HtmlWebPackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,    
                exclude: /node_modules/,           
               // use: ['style-loader','css-loader'],
                use:[

                    {

                    loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader"
                ]                  
            
               
            },

            {

                test:/\.png|jpe?g|svg$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:5000
                        }
                    }
                ]
            }
        ]
    },

    plugins:[new HtmlWebPackPlugin(), new MiniCssExtractPlugin()]
};