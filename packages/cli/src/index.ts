import {
	minimist, childProcess, yaml,
	globby
} from "@gbvflabs/dep";


const argv = minimist(process.argv.slice(2));
async function loadConfig(){
}

async function main(){
	const root  = process.cwd()
	const pnpmWorkSpace = globby.globbySync(
		'pnpm-workspace.yaml',
		{
			cwd: root,
			absolute: true,
			onlyFiles: true,
		}
	)

	console.log(pnpmWorkSpace)
	// console.log(argv)
}


main().catch((err) => {
	console.error(err);
	process.exit(1);
});










