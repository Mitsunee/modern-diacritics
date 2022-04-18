import initConfig from "@foxkit/rollup-config/ts.js";
const makeConfig = initConfig();

const config = [makeConfig({ input: "src/index.ts", key: "." })];

export default config;
