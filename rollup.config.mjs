import { readFileSync, rmdirSync, existsSync } from "fs";
import { join } from "path";
import { makeRollupConfig } from "@foxkit/internal";

// clean dist dir
const distPath = join(process.cwd(), "dist");
if (existsSync(distPath)) {
  rmdirSync(join(process.cwd(), "dist"), { recursive: true, force: true });
}

const pkg = JSON.parse(
  readFileSync(join(process.cwd(), "package.json"), "utf8")
);
const config = makeRollupConfig(pkg);

export default config;
