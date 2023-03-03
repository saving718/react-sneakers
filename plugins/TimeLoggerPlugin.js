const chalk = require("react-dev-utils/chalk");
const PLUGIN_NAME = "TimeLoggerPlugin";

class TimeLoggerPlugin {
	constructor(isServer) {
		this.isServer = isServer;
	}
	apply(compiler) {
		compiler.hooks.watchRun.tap(PLUGIN_NAME, (compiler) => {
			if (this.isServer) {
				console.log(chalk.green(`Compilation Done ${new Date().toLocaleString()} on server`));
			} else {
                console.log(chalk.green(`Compilation Done ${new Date().toLocaleString()} on client`));
            }
		});
	}
}

module.exports = TimeLoggerPlugin;
