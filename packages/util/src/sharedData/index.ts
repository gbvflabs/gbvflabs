import {url,path} from "@gbvflabs/dep"

export default {
    get __filename(){
        return url.fileURLToPath(import.meta.url)
    },
    get __dirname(){
        return path.dirname(this.__filename)
    }
}
