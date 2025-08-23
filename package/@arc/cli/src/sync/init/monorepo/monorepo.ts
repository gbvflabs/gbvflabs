import url from "node:url";
import path from "node:path";
import fs from "node:fs";
const monorepoConfigFileMap = {
  packageJson: `{
    "name": "frontend-web-mono-repo-v0",
    "private": true,
    "scripts": {
        "sync": "pnpm --filter @arc/cli sync",
        "sync:init": "pnpm --filter @arc/cli sync:init",
        "sync:init:monorepo": "pnpm --filter @arc/cli sync:init:monorepo",
    }
  }
  `,
  pnpmWorkspaceYaml: `
    packages:
    - "package/**/*"
  `,
};

const outputFile = async (destFilePath: string, content: string) => {
  await fs.promises.writeFile(destFilePath, content, {
    encoding: "utf-8",
  });
};

const monorepo = () => {
  const npm_lifecycle_event = process.env.npm_lifecycle_event;
  if (npm_lifecycle_event !== "sync:init") return;
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const local = path.resolve(__dirname, "../../../");
  const root = path.resolve(local, "../../../");
  const destFilePathMap = {
    packageJson: path.join(root, "package.json"),
    pnpmWorkspaceYaml: path.join(root, "pnpm-workspace.yaml"),
  };
  outputFile(destFilePathMap.packageJson, monorepoConfigFileMap.packageJson);
  outputFile(
    destFilePathMap.pnpmWorkspaceYaml,
    monorepoConfigFileMap.pnpmWorkspaceYaml
  );
};

export default monorepo;
