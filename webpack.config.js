
const path = require('path');

const clientConfig = {
    target : 'web',
    entry : './src/index.jsx',
    mode : 'development',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'public')
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                resolve : {
                    extensions : [".js", ".jsx"]
                },
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: {
                                    browsers: ['last 2 versions']
                                }
                            }
                        ],
                        '@babel/preset-react'
                    ],
                }
            }
        ]
    },

    devServer : {
        port : 3000,
        contentBase : path.join(__dirname, 'public')
    }
}

module.exports = clientConfig;