export default (instance) => (
    instance.plugin(`done`, stats => {
        const {
            argv
        } = process;

        const {
            compilation
        } = stats;

        const {
            errors = []
        } = compilation;

        const {
            length
        } = errors;

        const _ended_ = (
            argv.indexOf(`--watch`) === -1
        )

        if (_ended_ && length > 0) {
            errors.forEach(error => {
                console.error(error.message)
            })
            return process.exit(1);
        }
    })
)
