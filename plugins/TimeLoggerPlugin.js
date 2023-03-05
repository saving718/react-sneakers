const chalk = require("react-dev-utils/chalk");
const PLUGIN_NAME = "TimeLoggerPlugin";

class TimeLoggerPlugin {
	constructor(isServer) {
		this.isServer = isServer;
	}
	apply(compiler) {
		compiler.hooks.watchRun.tap(PLUGIN_NAME, (compiler) => {
			if (this.isServer) {
				console.log(chalk.green(`Compilation server done ${new Date().toLocaleString()}`));
			} else {
                console.log(chalk.green(`Compilation client done ${new Date().toLocaleString()}`));
            }
		});
	}
}

module.exports = TimeLoggerPlugin;
