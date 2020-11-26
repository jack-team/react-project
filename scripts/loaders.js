import MiniCssPlugin from 'mini-css-extract-plugin';

const loaders = [];

const __DEV__ = (
    envArg.env === `development`
);

/*借鉴react-cli css module 正则*/
const sassRegex = /\.(scss|sass|css)$/;
const sassModuleRegex = /\.moudle\.(scss|sass|css)$/;

/*ts转换*/
loaders.push({
    test: /\.tsx|ts$/,
    use: `ts-loader`,
    exclude: /node_modules/
});

/*转换es6*/
loaders.push({
    test: /\.js$/,
    use: `babel-loader`,
    exclude: /node_modules/
});

/*scss样式解析*/
const cssModuleLoader = {
    loader: 'css-loader',
    options: {
        modules: {
            mode: `local`,
            exportGlobals: true,
            localIdentName: `[name]-[local]-[hash:base64:8]`
        }
    }
};

/*解析css module*/
loaders.push({
    test: sassModuleRegex,
    use: [
        `style-loader`,
        cssModuleLoader,
        `postcss-loader`,
        `sass-loader`
    ]
});

/*解析普通scss*/
loaders.push({
    test: sassRegex,
    exclude: sassModuleRegex,
    use: [
        `style-loader`,
        `css-loader`,
        `postcss-loader`,
        `sass-loader`
    ]
});

/*提取css*/
if (!__DEV__) {
    loaders.push({
        test: sassRegex,
        include: /[\\/]node_modules[\\/]/,
        use: [
            MiniCssPlugin.loader,
            `css-loader`,
            `postcss-loader`,
            `sass-loader`
        ]
    });
}

/*图片解析*/
loaders.push({
    test: /\.(jpe?g|png|gif)$/,
    use: [{
        loader: `url-loader`,
        options: {
            limit: 8192, //8kb
            outputPath: `images/`
        }
    }]
});

/*解析字体*/
loaders.push({
    test: /\.(eot|ttf|woff|svg)$/,
    use: [{
        loader: `url-loader`,
        options: {
            limit: 8192, //8kb
            outputPath: `fonts/`
        }
    }]
});

export default loaders;
