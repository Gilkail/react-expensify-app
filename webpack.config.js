const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = (env) => {
    const isProducation = env === 'production'
    const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' })
    
    process.env.NODE_ENV = process.env.NODE_ENV || 'development' // Setting the enviroment values

    if(process.env.NODE_ENV === 'test'){ // If enviroment is test set the dotenv path to .env.test
        require('dotenv').config({path: '.env.test'})
    }else if (process.env.NODE_ENV === 'development'){ // If enviroment is development set the dotenv path to .env.development
        require('dotenv').config({path: '.env.development'})
    }

    return {
        entry: './src/app.js', 
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js',
        },
        module: {
            rules: [{ // 1st rule - Load babel for all JS files
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({ // Configuration of the server keys
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY)
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN)
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL)
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID)
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET)
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
            })
        ],
        devtool: isProducation ? 'source-map' : 'inline-source-map',
        devServer: { // Run server files
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
}