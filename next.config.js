const path = require("path");
const TimeLoggerPlugin = require("./plugins/TimeLoggerPlugin");
const CompilationCountPlugin = require("./plugins/CompilationCountPlugin");

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		if (!isServer) {
			config.plugins.push(new CompilationCountPlugin());
		}
		config.plugins.push(new TimeLoggerPlugin(isServer));
		return config;
	},
	images: {
		loader: "akamai",
		path: "./",
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
			"/": { page: "/", query: { __nextDefaultLocale: "en", _page: Number } },
			"/cart": { page: "/cart",  },
		};
	},
};
