import commonjs from "@rollup/plugin-commonjs";
import nodeResolver from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";
import typescript from "rollup-plugin-typescript2";
import { cleanDist } from "./rollup.plugin";

const input = "src/index.ts";

const plugins = [
  external({
    includeDependencies: true,
  }),
  typescript({
    clean: true,
    exclude: ["**/__tests__", "**/*.test.ts", "**/stories/**/*"],
  }),
  commonjs({
    include: /\/node_modules\//,
  }),
  nodeResolver(),
  terser({
    output: { comments: false },
    compress: {
      drop_console: true,
    },
  }),
  cleanDist,
];

export default [
  {
    input,
    output: {
      file: "dist/index.js",
      format: "cjs",
      name: "ReactUtilities",
      sourcemap: true,
      exports: "named",
      interop: "auto",
    },
    plugins,
  },
  {
    input,
    output: {
      file: "dist/index.modern.js",
      format: "esm",
      name: "ReactUtilities",
      sourcemap: true,
      exports: "named",
    },
    plugins,
  },
];
