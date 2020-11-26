import webpack from 'webpack';
import logInfo from './../utils/log';
import webpackConfig from './config';
import pointError from './../utils/pointError';
import TerserPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

webpackConfig.mode = `production`;

webpackConfig.plugins.push(
    new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
    })
);

webpackConfig.plugins.push(
    new OptimizeCSSAssetsPlugin({})
);

webpackConfig.plugins.push(
    new webpack.ProgressPlugin({
        profile: true
    })
);

webpackConfig.plugins.push(
    new webpack.DefinePlugin({
        __DEV__: false
    })
);

webpackConfig.output.publicPath = `./`;

webpackConfig.plugins.push(pointError);

webpackConfig.plugins.push(
    new webpack.HashedModuleIdsPlugin()
);

webpack(webpackConfig, logInfo);
