import { path, fsExtra,globby,yaml } from "@gbvflabs/dep";
import { Console } from "@gbvflabs/util";
import { Path } from "path-scurry";

const GLOBAL_KEY = Symbol("__GBVFLABS_COMMON_DATA__");

type Options = {
    root:string
    local:string|string[]
}

type ProjectInfo = {
    dir:string
    pkg:object
    paths?: Record<string, string>;
}
export type Config = {
    root:ProjectInfo
    local: ProjectInfo|ProjectInfo[];
};

export function getConfig(): Config {
    const g = globalThis as unknown as Record<typeof GLOBAL_KEY, Config>;
    return g[GLOBAL_KEY] ??= {
        root:{
            dir:process.cwd(),
            pkg:readRootPackageJson(process.cwd()),
            paths:{}
        },
        local:{
            dir:process.cwd(),
            pkg:readRootPackageJson(process.cwd()),
            paths:{}
        }
    };
}

export function syncConfig(configFilePath:string = path.resolve(process.cwd(),"gbvflabs.config.ts")){
    const configFile = fsExtra.readFileSync(configFilePath,"utf-8")
    console.log(configFile)
}

function readRootConfigFile(root:string){

}

function readRootPackageJson(root:string) {
	const rootPackageJsonPath = path.resolve(root,'package.json')
	const rootPackageJson = fsExtra.readJSONSync(rootPackageJsonPath)
    return rootPackageJson
}

function readChildPackageJsonList(root:string, local?: string|string[]) {
    if (typeof local !== 'undefined') {
        local = Array.isArray(local) ? local : [local]
    }

	const pnpmWorkSpacePath = path.resolve(root,'pnpm-workspace.yaml')
	if(!fsExtra.existsSync(pnpmWorkSpacePath)){
		Console.error('pnpm-workspace.yaml not found')
	}
	const pnpmWorkSpaceContent = fsExtra.readFileSync(pnpmWorkSpacePath,'utf-8')
	const pnpmWorkSpace = yaml.parse(pnpmWorkSpaceContent)

	const packageJsonPatterns = [...pnpmWorkSpace.packages,...pnpmWorkSpace.packages.flatMap((item:string)=>[`${item}/package.json`,`${item}/*/package.json`])]
	const packageJsonFiles = globby.globbySync(packageJsonPatterns)
    console.log(packageJsonFiles)
	const packageJsonContents= packageJsonFiles.map((file)=>fsExtra.readJSONSync(file))
	const packageJsonNames = packageJsonContents.map((item)=>item.name)
    return packageJsonNames
}




