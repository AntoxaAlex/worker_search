import {logger} from "../logging/winston";
import {Request,Response,NextFunction} from "express"

export default (err:any,req:Request,res:Response,next:NextFunction) => {
    logger.error(`${err.message} -> ${req.method}:${req.originalUrl}.`)
}