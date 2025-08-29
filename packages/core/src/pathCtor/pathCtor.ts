
import * as dep from "@gbvflabs/dep"

const auto = [
    "server",
    "asset",
    "type",
    "env",
    "const",
    "local",
    "util",
    "helper",
    "hook",
    "doc",
    "entry",
    "app",
    "router",
    "route",
    "store",
    "layout",
    "page",
    "view",
    "comp",
]

const pathCtor = ({root,local}:
    {
        root:string
        local:string
    }
)=>{
    return {
        $root:root,
        $pkg:dep.path.resolve(root,"./package.json"),
        $dep:dep.path.resolve(root,"./node_modules"),
        $tsBaseConfig: dep.path.resolve(root, "./tsconfig.base.json"),
        $tsconfig: dep.path.resolve(root, "./tsconfig.json"),
        $twconfig: dep.path.resolve(root, "./tailwind.config.json"),
        $meta: dep.path.resolve(root, "./meta.json"),
        $config: dep.path.resolve(root, "./config"),
        $script: dep.path.resolve(root, "./script"),
        $cache: dep.path.resolve(root, "./cache"),
        $package: dep.path.resolve(root, "./package"),
        "@host": dep.path.resolve(root, "./package/@host"),

        local,
        pkg: dep.path.resolve(local, "./package.json"),
        dep: dep.path.resolve(local, "./node_modules"),
        tsconfig: dep.path.resolve(local, "./tsconfig.json"),
        meta: dep.path.resolve(local, "./meta.json"),
        config: dep.path.resolve(local, "./config"),
        script: dep.path.resolve(local, "./config"),
        "config/build": dep.path.resolve(local, "./config/build"),
        "config/style": dep.path.resolve(local, "./config/style"),
        "config/script": dep.path.resolve(local, "./config/script"),
        "config/lint": dep.path.resolve(local, "./config/lint"),
        "config/format": dep.path.resolve(local, "./config/format"),
        "config/comp": dep.path.resolve(local, "./config/comp"),
        "config/test": dep.path.resolve(local, "./config/test"),
        "config/ci": dep.path.resolve(local, "./config/ci"),
        cache: dep.path.resolve(local, "./cache"),
        "cache/build": dep.path.resolve(local, "./cache/build"),
        "cache/lint": dep.path.resolve(local, "./cache/lint"),
        "cache/type": dep.path.resolve(local, "./cache/type"),
        "cache/logger": dep.path.resolve(local, "./cache/logger"),

        auto,
        src: dep.path.resolve(local, "./src"),
        server: dep.path.resolve(local, "./src/server"),
        public: dep.path.resolve(local, "./src/public"),
        asset: dep.path.resolve(local, "./src/asset"),
        type: dep.path.resolve(local, "./src/type"),
        env: dep.path.resolve(local, "./src/env"),
        const: dep.path.resolve(local, "./src/const"),
        locale: dep.path.resolve(local, "./src/locale"),
        util: dep.path.resolve(local, "./src/util"),
        helper: dep.path.resolve(local, "./src/helper"),
        hook: dep.path.resolve(local, "./src/hook"),
        doc: dep.path.resolve(local, "./src/doc"),
        entry: dep.path.resolve(local, "./src/entry"),
        app: dep.path.resolve(local, "./src/app"),
        router: dep.path.resolve(local, "./src/router"),
        route: dep.path.resolve(local, "./src/route"),
        store: dep.path.resolve(local, "./src/store"),
        layout: dep.path.resolve(local, "./src/layout"),
        page: dep.path.resolve(local, "./src/page"),
        view: dep.path.resolve(local, "./src/view"),
        comp: dep.path.resolve(local, "./src/comp"),
    }
}

export default pathCtor


