import { yaml, path, fsExtra, globby, inquirer } from "@gbvflabs/dep";
import { Console } from "@gbvflabs/util";


// const cli = cac("gbvflabs");

// cli
// 	.command("sync", "项目同步/初始化向导")
// 	.option("--init", "初始化基础工程结构")
// 	.action(async (options: { init?: boolean }) => {
// 		const root = process.cwd();
// 		const workspaceFile = path.resolve(root, "pnpm-workspace.yaml");
// 		const exists = fsExtra.existsSync(workspaceFile);
// 		if (!exists) {
// 			Console.warn("未发现 pnpm-workspace.yaml，将进入初始化向导");
// 		}
// 		const answers = await inquirer.prompt([
// 			{
// 				type: "list",
// 				name: "action",
// 				message: "请选择要执行的同步动作",
// 				choices: [
// 					{ name: "初始化基础工程结构", value: "init" },
// 					{ name: "仅检测工作区并列出包", value: "inspect" },
// 				],
// 			},
// 		]);

// 		if (answers.action === "init") {
// 			if (!exists) {
// 				const minimalWorkspace = `packages:\n  - "packages/*"\n`;
// 				await fsExtra.writeFile(workspaceFile, minimalWorkspace, {
// 					encoding: "utf-8",
// 				});
// 				await fsExtra.ensureDir(path.resolve(root, "packages"));
// 				Console.success("已创建最小工作区配置与 packages 目录");
// 			} else {
// 				Console.info("已存在工作区配置，跳过创建");
// 			}
// 			return;
// 		}

// 		if (exists) {
// 			const content = fsExtra.readFileSync(workspaceFile, "utf-8");
// 			const config = yaml.parse(content);
// 			const patterns = [
// 				...config.packages,
// 				...config.packages.flatMap((p: string) => [
// 					`${p}/package.json`,
// 					`${p}/*/package.json`,
// 				]),
// 			];
// 			const files = globby.globbySync(patterns);
// 			const names = files
// 				.map((f: string) => fsExtra.readJSONSync(f))
// 				.map((pkg: any) => pkg.name)
// 				.filter(Boolean);
// 			Console.info(["检测到以下包：", ...names]);
// 		} else {
// 			Console.info("未检测到工作区配置");
// 		}
// 	});

// cli.help();
// cli.version("0.0.0");

// cli.parse();










