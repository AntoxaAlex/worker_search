import {Request} from "express"

export interface CustomRequestInterface extends Request{
    user:{
        _id:string
    }
}