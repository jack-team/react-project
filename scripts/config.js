import loaders from './loaders';
import optimize from './optimize';
import resolve from './../utils/resolve';
import MiniCssPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __DEV__ = (
    envArg.env === `development`
);

/*入口文件*/
const entry = {
    app: resolve(`./src/index.tsx`)
};

/*输出*/
const output = {
    publicPath: `/`,
    filename: `js/[name].js`,
    path: resolve(`dist`)
};

/*插件*/
const plugins = [
    /*制定模板*/
    new HtmlWebpackPlugin({
        template: resolve(`./public/tpl.html`)
    }),
    new MiniCssPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
    })
];

const _resolve_ = {
    extensions: [
        `.tsx`, `.ts`, `.js`, `.json`, `.scss`
    ]
};

export default {
    entry: entry,
    output: output,
    plugins: plugins,
    resolve: _resolve_,
    optimization: optimize,
    module: {rules: loaders},
    devtool: __DEV__ ? `source-map` : ``
};
