import bytesToSize from './bytesToSize';

const logError = (error) => {
    const {
        stack,
        details
    } = error || {};

    return !!details ?
        details : (stack || error);
}

export default (error, stats) => {
    if (!!error) {
        return console.error(
            logError(error)
        )
    }

    const {
        assets
    } = stats.toJson();

    const output = {};

    assets.forEach(({name, size}) => (
        output[name] = {
            size: bytesToSize(size)
        }
    ))

    console.table(output);
}
