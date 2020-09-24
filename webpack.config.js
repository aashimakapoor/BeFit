const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dest'),
        filename: 'main.js',
        publicPath: '/'
    },
    module: {
        devServer: {
            historyApiFallback: true,
        },
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader','css-loader','sass-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
}
