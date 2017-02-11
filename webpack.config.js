const webpack = require('webpack');

module.exports = {
    entry: {
        obercube: './src/client/index.tsx'
    },

    output: {
        path: `${__dirname}/dist/`,
        publicPath: '/dist/',
        filename: './[name].js'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: `${__dirname}/src`,
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                include: `${__dirname}/src`,
                query: {
                    tsconfig: './tsconfig.json'
                }
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
        noInfo: true
    },

    devtool: 'eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = 'source-map';

    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
    ]);
}
