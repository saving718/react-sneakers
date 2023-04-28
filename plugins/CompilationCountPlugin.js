class CompilationCountPlugin {
	constructor(options) {
		this.options = options;
		this.count = 0;
	}
  
	apply(compiler) {
		// Событие webpack, вызывается для клиентского бандла
		compiler.hooks.emit.tapAsync("CompilationCounterPlugin", (compilation, callback) => {
			this.count += 1;
			console.log(`Compilation count: ${this.count}`);
			callback();
		});
	}
}

module.exports = CompilationCountPlugin;
