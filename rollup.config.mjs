import initConfig from "@foxkit/rollup-config/ts.js";
const makeConfig = initConfig();

const config = [
  makeConfig({ input: "src/index.js", key: ".", ts: false })
];

export default config;