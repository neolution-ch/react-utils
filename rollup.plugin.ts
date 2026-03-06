import { type Plugin } from "rollup";
import * as fs from "fs";

export const cleanDist: Plugin = {
  name: "cleanDist",
  /**
   * Remove some unwanted files from the dist folder before creating the bundle
   */
  writeBundle() {
    fs.rmSync("./dist/rollup.config.d.ts", { force: true });
    fs.rmSync("./dist/eslint.config.d.ts", { force: true });
    fs.rmSync("./dist/rollup.plugins.d.ts", { force: true });
  },
};
