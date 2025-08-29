// import * as dep from "@gbvflabs/dep"

// type FileConfig = {
//     root:{
//         cwd:string
//     }
//     local:{
//         cwd:string
//         configFile?:string
//     }
// }

// type Config = {
//     version:Version
//     script:Script
//     pkg:Pkg
//     meta:Meta
//     env:Env
// }

// type Version = {
//     host: string;
//     local: string;
// }

// type Script={
//     cli:string
//     cmd:string
//     configFile:string
// }

// type Pkg = {
//     name:string
//     version:string
//     description: string;
//     main: string;
//     scripts: Record<string, string>;
//     dependencies: Record<string, string>;
//     devDependencies: Record<string, string>;
// }

// //记载配置文件
// //同步数据

// type LoadOptions = {
//     configFile:string
//     cwd?:string
// }

// async function readConfigFile(absolute:string):Promise<any>{
//     if(!dep.fs.existsSync(absolute)){
//         throw new Error(`Config file not found: ${absolute}`)
//     }
//     const ext = dep.path.extname(absolute).toLowerCase();
//     if(ext === ".json"){
//         const raw = dep.fs.readFileSync(absolute,"utf8")
//         return JSON.parse(raw)
//     }
//     try {
//         const url = dep.url.pathToFileURL(absolute).href
//         const mod:Config = await import(url)
//     } catch {
//         // eslint-disable-next-line @typescript-eslint/no-var-requires
//         const mod = require(absolute)
//         return mod?.default ?? mod
//     }


//     // 后缀名
// }

// async function loadConfig({configFile,cwd}:LoadOptions):Promise<Config>{
//     const workingDir = cwd ?? process.cwd();
//     const absolutePath = dep.path.isAbsolute(configFile)
//         ? configFile
//         : dep.path.resolve(workingDir,configFile)

//     const raw = await readConfigFile(absolutePath)

//     // return {}
// }




// export {}