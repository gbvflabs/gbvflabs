import {chalk,boxen} from "@gbvflabs/dep";
import {type Options} from "boxen"

type LogType = "success" | "info" | "warn" | "error";
type Config = {boxenOptions:Options,chalkInstance?:typeof chalk}
const baseConfig:Config = {
  boxenOptions:{
    titleAlignment: "center",
    padding: 1,
    borderStyle: "single",
    dimBorder: false,
  },
}
const configMap:Record<LogType,Config> = {
  success:{
    boxenOptions:{
      title: "success",
      borderColor: "green",
      backgroundColor: "green",
    },
    chalkInstance:chalk.green.bold,
  },
  info:{
    boxenOptions:{
      title: "Info",
      borderColor: "blue",
      backgroundColor: "blue",
    },
  },
  warn:{
    boxenOptions:{
      title: "Warn",
      borderColor: "yellow",
      backgroundColor: "yellow",
    },
  },
  error:{
    boxenOptions:{
      title: "Error",
      borderColor: "red",
      backgroundColor: "red",
    },
  },
}

const log = (type:keyof typeof configMap,msg: string | string[])=>{
  const config = configMap[type];
  const text =  Array.isArray(msg) ? msg.join("\n") : msg;
  console.log(
        boxen(config.chalkInstance?.(text), {
      ...baseConfig.boxenOptions,
      ...config.boxenOptions,
    })
  );
}

export default {
  success(msg: string | string[]) {
    log("success",msg)
  },
  info(msg: string | string[]) {
    log("info",msg)
  },
  warn(msg: string | string[]) {
    log("warn",msg)
  },
  error(msg: string | string[]) {
    log("error",msg)
    process.exit(0);
  },
};
