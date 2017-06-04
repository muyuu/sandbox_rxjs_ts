const path = require('path');

module.exports = {
    entry: {
        app :'./src/js/app.ts'
    },
    output: {
        path: path.resolve("./app/js/"),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                    },
                ]
            },
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, 'src')
        ],
        extensions: [".ts", ".js", ".json", ".jsx", ".css"],
    },
    devServer: {
        contentBase: path.join(__dirname, "app"),
        compress: true,
        port: 9000
    },
};
