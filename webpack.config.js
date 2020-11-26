    const path = require ('path')
    const ExtractTextPlugin = require('extract-text-webpack-plugin')

// You have to define the enty and output 

module.exports = (env) => {
    const isProduction = env === 'production'
    const CSSExtract = new ExtractTextPlugin('styles.css')
    return   {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules:[{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                               sourceMap: true 
                            }
                        }
                    ]
                })
            }
        ]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback:true,
            publicPath: '/dist/'
        }
    }
}

// Loader helps you customise the behaviour of webpack when it loads a given file