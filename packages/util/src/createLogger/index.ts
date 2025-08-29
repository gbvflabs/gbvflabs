
import * as dep from "@gbvflabs/dep"
const {winston} = dep

declare module 'winston' {
  interface Logger {
    success: import("winston").LeveledLogMethod
  }
}

export default function createLogger(dirname:string,label?:string){
  return winston.createLogger({
      levels:{ error: 0, warn: 1, info: 2, success: 3 },
      format:winston.format.combine(
        winston.format.timestamp(),
        label? winston.format.label({label}):winston.format((info)=>info)(),
        winston.format.printf((info)=>{
          const labelPart = info.label ? `[${(info as any).label}]` : "";
          return `${info.timestamp} ${info.level}${labelPart}: ${info.message}`;
        })
      ),
      transports:[
        winston.transports.Console && new winston.transports.Console({
          format:winston.format.combine(winston.format.colorize(), winston.format.simple()),
        }),
        ...(winston.transports.File ? ['success','info','warn','error'].map(item=>{
          return new winston.transports.File({
            dirname,
            filename:`${item}.log`,
            level:item
          })
        }):[])
      ],
      exceptionHandlers:[
        dep.winston.transports.File &&
        new dep.winston.transports.File({ dirname, filename: "exceptions.log" }),
      ].filter(Boolean),
      rejectionHandlers: [
        dep.winston.transports.File &&
          new dep.winston.transports.File({ dirname, filename: "rejections.log" }),
      ].filter(Boolean),
  })
}



