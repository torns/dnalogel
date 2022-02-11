const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './index.ts',
    // watch: true,
    // watchOptions: {
    //     ignored: [
    //         '**/node_modules/',
    //         '**/examples'
    //     ]
    // },
    output: {
        module: true,
        library: {
            type: "module"
        },
        filename: "main.js",
        // filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'libs'),
        clean: true
    },
    optimization: {
        usedExports: true,
        concatenateModules: true
    },
    experiments: {
        outputModule: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                exclude: /node_modules/,
                use: [{
                    loader: "ts-loader"
                }]
            }
        ]
    },
    resolve: {
        // modules: [path.resolve(__dirname, 'node_modules')],
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    plugins:[
        // new webpack.HotModuleReplacementPlugin()
    ]
}
