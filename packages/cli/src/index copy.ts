import { minimist, path as npath, fs as nfs, childProcess as nchild } from "@gbvflabs/dep";

// const argv = minimist(process.argv.slice(2));

// const showHelp = () => {
// 	console.log(`
//         Usage: gbvflabs <command> [options]

//         Commands:
//         temp init         初始化 temp 模板文件

//         Options:
//         -h, --help        显示帮助
//     `);
// };

// const outputFile = async (destFilePath: string, content: string) => {
// 	await nfs.promises.mkdir(npath.dirname(destFilePath), { recursive: true });
// 	await nfs.promises.writeFile(destFilePath, content, { encoding: "utf-8" });
// };

// const runPnpm = (args: string[], opts: { cwd: string }) => {
// 	return new Promise<void>((resolve, reject) => {
// 		const child = nchild.spawn(`pnpm`, args, {
// 			cwd: opts.cwd,
// 			stdio: "inherit",
// 		});
// 		child.on("close", (code) => {
// 			if (code === 0) resolve();
// 			else reject(new Error(`pnpm 退出码 ${code}`));
// 		});
// 		child.on("error", reject);
// 	});
// };

// const tempInit = async () => {
// 	const root = process.cwd();
// 	const path = {
// 		$root: root,
// 		$pkg: npath.resolve(root, "package.json"),
// 		$workspace: npath.resolve(root, "pnpm-workspace.yaml"),
// 		"@arc/dep/pkg": npath.resolve(root, "package", "@arc", "dep", "package.json"),
// 		"@arc/core/pkg": npath.resolve(root, "package", "@arc", "core", "package.json"),
// 		"@arc/util/pkg": npath.resolve(root, "package", "@arc", "util", "package.json"),
// 		"@arc/cli/pkg": npath.resolve(root, "package", "@arc", "cli", "package.json"),
// 	};
// 	const content = {
// 		$pkg: `{
//             "name": "frontend-web-mono-repo-v0",
//             "scripts": {
//                 "cli": "pnpm --filter @arc/cli cli"
//             }
//         }`,
// 		$workspace: `packages:\n- \"package/**/*\"\n`,
// 		"@arc/dep/pkg": `{"name":"@arc/dep"}`,
// 		"@arc/util/pkg": `{"name":"@arc/util"}`,
// 		"@arc/core/pkg": `{"name":"@arc/core"}`,
// 		"@arc/cli/pkg": `{
//         "name": "@arc/cli",
//         "private": true,
//         "type": "module",
//         "scripts": {
//             "cli": "node ./src/index.ts"
//         }
//         }`,
// 	};

// 	await Promise.all([
// 		outputFile(path.$pkg, content.$pkg),
// 		outputFile(path.$workspace, content.$workspace),
// 		outputFile(path["@arc/dep/pkg"], content["@arc/dep/pkg"]),
// 		outputFile(path["@arc/util/pkg"], content["@arc/util/pkg"]),
// 		outputFile(path["@arc/core/pkg"], content["@arc/core/pkg"]),
// 		outputFile(path["@arc/cli/pkg"], content["@arc/cli/pkg"]),
// 	]);

// 	try {
// 		await runPnpm(["add", "@types/node", "-D"], { cwd: root });
// 	} catch {}
// };

// const main = async () => {
// 	const [command, subcommand] = argv._ as string[];

// 	if (argv.h || argv.help) {
// 		showHelp();
// 		return;
// 	}

// 	switch (command) {
// 		case "temp": {
// 			switch (subcommand) {
// 				case "init": {
// 					await tempInit();
// 					return;
// 				}
// 				default: {
// 					console.error("未知子命令: temp", subcommand ?? "(缺失)");
// 					showHelp();
// 					process.exitCode = 1;
// 					return;
// 				}
// 			}
// 		}
// 		case undefined: {
// 			showHelp();
// 			return;
// 		}
// 		default: {
// 			console.error("未知命令:", command);
// 			showHelp();
// 			process.exitCode = 1;
// 			return;
// 		}
// 	}
// };

// main().catch((err) => {
// 	console.error(err);
// 	process.exit(1);
// });










