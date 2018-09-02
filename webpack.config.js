const path = require('path');

module.exports = {
    entry: './client/index.js',
    output: {
        filename: './bundle.js',
        path: path.join(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                loader: "babel-loader"
            },
                test:/\.css$/,
                use: [
                    { loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
        ]
    }
};
