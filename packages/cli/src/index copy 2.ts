// #!/usr/bin/env node

// const printHelp = () => {
//   const helpText = `
// Usage: arc <command> [options]

// Commands:
//   sync        运行初始化/同步任务

// Options:
//   -h, --help  显示帮助
// `;
//   process.stdout.write(helpText);
// };

// const main = async () => {
//   const argv = process.argv.slice(2);
//   const command = argv[0];

//   if (!command || command === "-h" || command === "--help") {
//     printHelp();
//     return 0;
//   }

//   if (command === "sync") {
//     try {
//       const mod = await import("../../sync/src/index.ts");
//       const run = (mod as any)?.default ?? mod;
//       if (typeof run !== "function") {
//         throw new Error("sync 入口未导出可调用的默认函数");
//       }
//       await Promise.resolve(run());
//       return 0;
//     } catch (error) {
//       process.stderr.write(`执行 sync 失败: ${(error as Error)?.message}\n`);
//       return 1;
//     }
//   }

//   process.stderr.write(`未知命令: ${command}\n`);
//   printHelp();
//   return 1;
// };

// main()
//   .then((code) => process.exit(code))
//   .catch((err) => {
//     process.stderr.write(`运行失败: ${(err as Error)?.message}\n`);
//     process.exit(1);
//   });
