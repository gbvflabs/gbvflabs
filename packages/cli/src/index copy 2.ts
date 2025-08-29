import {
	minimist,yargs, yaml,
	path,fs,globby,fsExtra,
} from "@gbvflabs/dep";

import {
	Console,
} from "@gbvflabs/util";

const argv = minimist(process.argv.slice(2));
async function loadConfig(){
}

async function main(){
	const root  = process.cwd()
	const pnpmWorkSpacePath = path.resolve(root,'pnpm-workspace.yaml')
	if(!fsExtra.existsSync(pnpmWorkSpacePath)){
		Console.error('pnpm-workspace.yaml not found')
	}
	const pnpmWorkSpaceContent = fsExtra.readFileSync(pnpmWorkSpacePath,'utf-8')
	const pnpmWorkSpace = yaml.parse(pnpmWorkSpaceContent)
	const packageJsonPatterns = [...pnpmWorkSpace.packages,...pnpmWorkSpace.packages.flatMap((item:string)=>[`${item}/package.json`,`${item}/*/package.json`])]
	const packageJsonFiles = globby.globbySync(packageJsonPatterns)
	const packageJsonContents= packageJsonFiles.map((file)=>fsExtra.readJSONSync(file))
	const packageJsonNames = packageJsonContents.map((item)=>item.name)
	console.log(packageJsonNames)

}


main().catch((err) => {
	console.error(err);
	process.exit(1);
});










