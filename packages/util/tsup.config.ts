import { defineConfig } from "tsup";
import base from "../../tsup.config";


export default defineConfig({
  ...base,
  entry: {
    'index': 'src/index.ts',
    'console/index': 'src/console/index.ts',
    'createLogger/index': 'src/createLogger/index.ts',
  },
});
