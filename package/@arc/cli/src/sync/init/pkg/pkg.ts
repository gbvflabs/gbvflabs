import url from "node:url";
import path from "node:path";
import fs from "node:fs";

const pkg = {};

const outputFile = async (destFilePath: string, content: string) => {
  await fs.promises.writeFile(destFilePath, content, {
    encoding: "utf-8",
  });
};

const pkg = () => {};

export default pkg;
