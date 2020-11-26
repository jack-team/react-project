const path = require('path');

const args = global.envArg = (
    require('minimist')(
        process.argv.splice(2)
    )
);

const plugins = [
    `@babel/plugin-transform-runtime`,
    [`@babel/plugin-proposal-decorators`, {
        legacy: true
    }]
];

const config = {
    plugins: plugins,
    presets: ['@babel/env']
};

require('@babel/register')(config);

const entryFile = (
    path.resolve(process.cwd(), args.input)
);

module.exports = require(entryFile);
