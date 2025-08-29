import { defineConfig } from "tsup";
import base from "../../tsup.config";

export default defineConfig({
  ...base,
  banner: {
    js: "#!/usr/bin/env node",
  },
});
