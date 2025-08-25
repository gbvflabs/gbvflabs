import url from "node:url";
import { default as _path } from "node:path";
import fs from "node:fs";
import child_process from "node:child_process";

const dep = {
  url,
  path: _path,
  fs,
  child_process,
};

const __filename = dep.url.fileURLToPath(import.meta.url);
const __dirname = dep.path.dirname(__filename);
const root = dep.path.resolve(__dirname, "../../../../../");

const path = {
  $root: root,
  $license: _path.resolve(root, "LICENSE"),
  $readme: _path.resolve(root, "README.md"),
  $pkg: _path.resolve(root, "package.json"),
  $workspace: _path.resolve(root, "pnpm-workspace.yaml"),
  $dep: _path.resolve(root, "node_modules"),
  $tsBaseConfig: _path.resolve(root, "tsconfig.base.json"),
  $tsconfig: _path.resolve(root, "tsconfig.json"),
  $twconfig: _path.resolve(root, "tailwind.config.json"),
  $package: _path.resolve(root, "package"),
  "@arc": _path.resolve(root, "package", "@arc"),
  "@arc/dep": _path.resolve(root, "package", "@arc", "dep"),
  "@arc/dep/pkg": _path.resolve(root, "package", "@arc", "dep", "package.json"),
  "@arc/core": _path.resolve(root, "package", "@arc", "core"),
  "@arc/core/pkg": _path.resolve(
    root,
    "package",
    "@arc",
    "core",
    "package.json"
  ),
  "@arc/util": _path.resolve(root, "package", "@arc", "util"),
  "@arc/util/pkg": _path.resolve(
    root,
    "package",
    "@arc",
    "util",
    "package.json"
  ),
  "@arc/cli": _path.resolve(root, "package", "@arc", "cli"),
  "@arc/cli/pkg": _path.resolve(root, "package", "@arc", "cli", "package.json"),
};
const content = {
  $pkg: `{
    "name": "frontend-web-mono-repo-v0",
    "scripts": {
        "cli": "pnpm --filter @arc/cli cli"
    }
  }`,
  $workspace: `
    packages:
    - "package/**/*"
  `,
  "@arc/dep/pkg": `
    {
      "name": "@arc/dep"
    }
  `,
  "@arc/util/pkg": `
    {
      "name": "@arc/util"
    }
  `,
  "@arc/core/pkg": `
    {
      "name": "@arc/core"
    }
  `,
  "@arc/cli/pkg": `
    {
      "name": "@arc/cli",
      "private": true,
      "type": "module",
      "scripts": {
        "cli": "node ./src/index.ts"
      }
    }
  `,
};
type FileConfig = {
  path: string;
  content: string;
};
type FileConfigTree = {
  [key: string]: FileConfig | FileConfigTree;
};
const fileConfigTree: FileConfigTree = {
  root: {
    packageJson: {
      path: path.$pkg,
      content: content.$pkg,
    },
    pnpmWorkspaceYaml: {
      path: path.$workspace,
      content: content.$workspace,
    },
  },
  package: {
    "@arc": {
      dep: {
        packageJson: {
          path: path["@arc/dep/pkg"],
          content: content["@arc/dep/pkg"],
        },
      },
      core: {
        packageJson: {
          path: path["@arc/core/pkg"],
          content: content["@arc/core/pkg"],
        },
      },
      util: {
        packageJson: {
          path: path["@arc/util/pkg"],
          content: content["@arc/util/pkg"],
        },
      },
      cli: {
        packageJson: {
          path: path["@arc/cli/pkg"],
          content: content["@arc/cli/pkg"],
        },
      },
    },
  },
};

const isFileConfig = (node: unknown): node is FileConfig => {
  return (
    !!node &&
    typeof node === "object" &&
    "path" in (node as any) &&
    "content" in (node as any)
  );
};

const deepFileConfigTree = (fileConfigTree: FileConfigTree) => {
  for (const [key, value] of Object.entries(fileConfigTree)) {
    if (isFileConfig(value)) {
      outputFile(value.path, value.content);
    } else {
      deepFileConfigTree(value);
    }
  }
};

const outputFile = async (destFilePath: string, content: string) => {
  await fs.promises.writeFile(destFilePath, content, {
    encoding: "utf-8",
  });
};

const runPnpm = (args: string[], opts: { cwd: string }) => {
  return new Promise<void>((resolve, reject) => {
    const child = child_process.spawn(`pnpm`, args, {
      cwd: opts.cwd,
      stdio: "inherit",
    });
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`pnpm 退出码 ${code}`));
    });
    child.on("error", reject);
  });
};

const init = async () => {
  deepFileConfigTree(fileConfigTree);
  try {
    await runPnpm(["add", "@types/node", "-D"], { cwd: path.$root });
  } catch (error) {}
};

export default init;
