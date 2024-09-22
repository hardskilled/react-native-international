const { build } = require("esbuild");
const { dependencies, peerDependencies } = require('../package.json')

const sharedConfig = {
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: true,
    external: Object.keys(dependencies || {}).concat(Object.keys(peerDependencies || {})),
};

build({
    ...sharedConfig,
    platform: 'browser', // for CJS
    outfile: "dist/index.js",
});

build({
    ...sharedConfig,
    outfile: "dist/index.esm.js",
    platform: 'neutral', // for ESM
    format: "esm",
});
