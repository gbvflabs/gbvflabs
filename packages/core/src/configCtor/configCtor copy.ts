import * as dep from "@gbvflabs/dep"

// declare global {

    type Config = {
        version:Version
        script:Script
        pkg:Pkg
        meta:Meta
        env:Env
    }

    type Version = {
        host: string;
        local: string;
    }

    type Script={
        cli:string
        cmd:string
        configFile:string
    }

    type Pkg = {
        name:string
        version:string
        description: string;
        main: string;
        scripts: Record<string, string>;
        dependencies: Record<string, string>;
        devDependencies: Record<string, string>;
    }

    type Meta = {
        port:number
        origin:{
            default:string
            [key:string]:string
        }
    }

    type Env = {
        WEBPACK_SERVE: boolean;
        WEBPACK_BUNDLE: boolean;
        WEBPACK_BUILD: boolean;
    }
// }

export {}



const GLOBAL_KEY = Symbol.for("gbvflabs.config.store");

type InternalStore = {
    config?: Config
    plugins: ConfigPlugin[]
}

type LoadOptions = {
    configFile: string
    cwd?: string
}

export type ConfigPlugin = (config: Config, ctx: ConfigContext) => Promise<Partial<Config> | void> | Partial<Config> | void

export type ConfigContext = {
    cwd: string
    env: NodeJS.ProcessEnv
}

function getStore(): InternalStore {
    const g = globalThis as any;
    if (!g[GLOBAL_KEY]) {
        g[GLOBAL_KEY] = { plugins: [] } as InternalStore;
    }
    return g[GLOBAL_KEY] as InternalStore;
}

export function useConfigPlugin(plugin: ConfigPlugin) {
    getStore().plugins.push(plugin);
}

export function hasConfigLoaded(): boolean {
    return Boolean(getStore().config);
}

export function setConfig(config: Config) {
    getStore().config = config;
}

export function getConfig(): Config {
    const cfg = getStore().config;
    if (!cfg) throw new Error("Config has not been loaded. Call loadConfig() first.");
    return cfg;
}

function booleanFromEnv(val: any): boolean | undefined {
    if (val === undefined) return undefined;
    const s = String(val).toLowerCase();
    if (s === "1" || s === "true" || s === "yes") return true;
    if (s === "0" || s === "false" || s === "no") return false;
    return undefined;
}

async function readConfigFile(absolutePath: string): Promise<any> {
    if (!dep.fs.existsSync(absolutePath)) {
        throw new Error(`Config file not found: ${absolutePath}`);
    }
    const ext = dep.path.extname(absolutePath).toLowerCase();
    if (ext === ".json") {
        const raw = dep.fs.readFileSync(absolutePath, "utf8");
        return JSON.parse(raw);
    }
    try {
        const url = dep.url.pathToFileURL(absolutePath).href;
        const mod: any = await import(url);
        return mod?.default ?? mod;
    } catch {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const mod = require(absolutePath);
        return mod?.default ?? mod;
    }
}

function applyEnvDefaults(base: any, env: NodeJS.ProcessEnv): any {
    const inferredEnv: Partial<Env> = {
        WEBPACK_SERVE: booleanFromEnv(env.WEBPACK_SERVE) ?? false,
        WEBPACK_BUNDLE: booleanFromEnv(env.WEBPACK_BUNDLE) ?? false,
        WEBPACK_BUILD: booleanFromEnv(env.WEBPACK_BUILD) ?? false,
    };
    return dep.deepmerge({ env: inferredEnv }, base || {});
}



export async function loadConfig({ configFile, cwd }: LoadOptions): Promise<Config> {
    const workingDir = cwd ?? process.cwd();
    const absolutePath = dep.path.isAbsolute(configFile)
        ? configFile
        : dep.path.resolve(workingDir, configFile);

    const raw = await readConfigFile(absolutePath);
    let merged: any = applyEnvDefaults(raw, process.env);

    for (const plugin of getStore().plugins) {
        const result = await plugin(merged as Config, { cwd: workingDir, env: process.env });
        if (result && typeof result === "object") {
            merged = dep.deepmerge(merged, result);
        }
    }

    if (!merged || typeof merged !== "object") {
        throw new Error("Loaded config is not an object.");
    }

    if (!merged.version) {
        merged.version = {
            host: "",
            local: "",
        };
    }

    if (!merged.script) {
        merged.script = { cli: "", cmd: "", configFile } as any;
    }

    if (!merged.pkg && dep.fs.existsSync(dep.path.resolve(workingDir, "package.json"))) {
        const pkgRaw = dep.fs.readFileSync(dep.path.resolve(workingDir, "package.json"), "utf8");
        merged.pkg = JSON.parse(pkgRaw);
    }

    setConfig(merged as Config);
    return getConfig();
}

useConfigPlugin((config) => {
    try {
        const branch = dep.childProcess
            .execSync("git rev-parse --abbrev-ref HEAD")
            .toString()
            .trim();
        const metaPatch = {
            meta: {
                ...config.meta,
                origin: {
                    default: branch,
                    ...(config.meta?.origin || {}),
                },
            },
        };
        return metaPatch as Partial<Config>;
    } catch {
        return;
    }
});

export default function configCtor(){}
