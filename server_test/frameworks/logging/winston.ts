import winston from "winston";
import {format} from "logform";
import timestamp = format.timestamp;
import colorize = format.colorize;
import errors = format.errors;
const path = require("path")

const myFormat = winston.format.printf(({timestamp,level,message})=>{
    return `${timestamp} ${level}: ${message}`
})

const options = {
    file:{
        level:"info",
        filename: `${path.join(__dirname,"/logs/app.log")}`,
        handleExceptions:true,
        json:true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false
    },
    console:{
        level: "debug",
        handleExceptions: true,
        format:winston.format.combine(
            timestamp({format:"YYYY-MM-DD HH:mm:ss"}),
            colorize(),
            errors({stack:true}),
            myFormat
        ),
        colorize: true
    }
}

export const logger = winston.createLogger({
    exitOnError:false,
    transports:[
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ]
})

