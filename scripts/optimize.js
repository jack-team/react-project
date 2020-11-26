const _runtimeChunk_ = {
    name: `runtime`
};

const _cacheGroups_ = {
    vendor: {
        name: `libs`,
        chunks: `all`,
        minSize: 0,
        minChunks: 1,
        priority: 100,
        maxInitialRequests: 5,
        test: /[\\/]node_modules[\\/]/,
    },
    common: {
        chunks: `all`,
        name: `common`,
        minChunks: 2,
        minSize: 0,
        priority: 1,
        maxInitialRequests: 5,
        test: /[\\/]src[\\/]/
    }
};

const _splitChunks_ = {
    cacheGroups: _cacheGroups_
};

export default {
    minimizer: [],
    chunkIds: `named`,
    splitChunks: _splitChunks_,
    runtimeChunk: _runtimeChunk_
}
