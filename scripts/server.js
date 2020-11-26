import webpack from 'webpack';
import webpackConfig from './config';
import devServer from 'webpack-dev-server';

const stats = {
    colors: true,
    cached: true,
    exclude: [/node_modules[\\\/]/]
};

webpackConfig.mode = `development`;

webpackConfig.plugins.push(
    new webpack.DefinePlugin({
        __DEV__: true
    })
)

const serverConfig = {
    hot: true,
    open: true,
    inline: true,
    stats: stats,
    compress: false,
    useLocalIp: true,
    contentBase: `./`,
    historyApiFallback:true,
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
};

const compiler = webpack(webpackConfig);

const server = new devServer(compiler, serverConfig);

server.listen(envArg.port);
