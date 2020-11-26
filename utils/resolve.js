import Path from 'path';

export default (path) => (
    Path.resolve(process.cwd(), path)
)
