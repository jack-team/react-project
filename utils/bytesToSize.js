export default (bytes = ``) => {
    if (!bytes) return `0 B`;
    const k = 1024;
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const sizes = [`B`, `KB`, `MB`, `GB`, `TB`, `PB`, `EB`, `ZB`, `YB`];
    return (bytes / Math.pow(k, i)).toPrecision(3) + ` ` + sizes[i];
}
