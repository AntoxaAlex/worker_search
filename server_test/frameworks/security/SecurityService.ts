import {SecurityInterface} from "../../application/interfaces/security_interfaces/SecurityInterface";
import dotenv from "dotenv"
if(process.env.NODE_ENV !== "production"){
    dotenv.config()
}
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");


export class SecurityService implements SecurityInterface{
    constructor() {
    }
    async authenticate(id:string,email: string, password: string): Promise<any> {
        if(!email && !password){
            throw new Error("no value")
        }
        const secret = process.env.JWT_SECRET;
        const payload = {
            user:{
                _id:id
            }
        }
        let token = jwt.sign(payload,secret,{expiresIn:3600})
        return token
    }
    async encryptPassword(password: string): Promise<any> {
        const salt = await bcrypt.genSalt(12)
        return await bcrypt.hash(password,salt)
    }

    async comparePasswords(password: string, hashPassword: string): Promise<any> {
        const isMatched = bcrypt.compare(password,hashPassword)
        if(!isMatched){
            throw new Error("Invalid credentials")
        }
        return true
    }
}