import {Response,NextFunction} from "express"
import {CustomRequestInterface as Request} from "../../../application/interfaces/CustomRequestInterface";
import {logger} from "../../logging/winston"

const jwt = require("jsonwebtoken")
import dotenv from "dotenv"
if(process.env.NODE_ENV !== "production"){
    dotenv.config()
}

export default async(req:Request,res:Response,next:NextFunction) => {
    const token = req.header("x-auth-token");
    try{
    if(!token){
        throw new Error("no token")
    }

    const secret = process.env.JWT_SECRET
        const decoded = jwt.verify(token,secret)
        req.user = decoded.user
        next();

    }catch (e) {
        logger.error(`e.message -> ${req.method}:${req.originalUrl}.`)
        throw new Error(e.message)
    }
}