import { defineConfig } from "tsup";
export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["cjs", "esm"],
  dts: true,
  target: "node24",
  platform: "node",
  sourcemap: true,
  clean: true,
  bundle: false,
});
