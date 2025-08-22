它们是什么
Turborepo（Turbo） 和 Nx 都是 monorepo 的“任务编排与构建加速”工具：用依赖图来并行/按序执行各包的 build/test/lint，并用“计算缓存”大幅加速本地与 CI。
核心能力（两者共有）
任务编排: 基于包依赖拓扑自动决定执行顺序与并行度。
受影响分析: 仅对改动影响到的包/目标执行（增量）。
计算缓存: 本地/远程缓存构建与测试结果，重复任务秒级返回。
远程缓存: 团队共享缓存加速 CI（Turbo Remote Cache / Nx Cloud）。
CI 集成: 轻松接入 GitHub Actions、GitLab CI 等。
主要区别
Turborepo
定位: 轻量、配置少、上手快，偏 JS/TS 生态。
配置: turbo.json 定义流水线（pipelines）。
特色: 极简任务/缓存为核心，约束少，学习成本低。
远程缓存: Vercel 提供的 Remote Cache（或自建）。
Nx
定位: 功能更全，面向中大型工程与平台化团队。
生态: 大量官方/社区插件（React/Angular/Nest/Node 等）。
工具: 代码生成器（generators）、架构守护、依赖图可视化、执行器（executors）。
特色: 更强的“受影响分析”、更细的工程规范与护栏。
远程缓存: Nx Cloud。
什么时候选哪个
小到中型、想快速提速且配置最少: 选 Turborepo。
中到大型、需要代码生成/插件体系/严格架构与可视化: 选 Nx。
与 pnpm 的关系
pnpm 负责依赖与 workspace 链接；
Turbo/Nx 负责“任务编排与加速”。常见组合：pnpm + Turborepo 或 pnpm + Nx。
