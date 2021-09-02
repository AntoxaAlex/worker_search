import {UserRepositoryInterface} from "../../application/interfaces/database_interfaces/UserRepositoryInterface";
import {UserInterface} from "../../application/interfaces/entities_interfaces/UserInterface";
import userModel from "./models/userModel";
import {SecurityInterface} from "../../application/interfaces/security_interfaces/SecurityInterface";
import {SecurityService} from "../security/SecurityService";
import {Document,Model} from "mongoose"

export class MongoDBUserRepository implements UserRepositoryInterface{
    userModel:Model<Document,any,any>
    securityService:SecurityInterface
    constructor() {
        this.userModel = userModel
        this.securityService = new SecurityService()
    }

    async getUserByID(id: string): Promise<any> {
        try {
            console.log("Id: "+id)
            console.log(typeof id)
            return await userModel.findById(id)
        }catch (error) {
            console.log(error.message)
            throw new Error(error.message)
        }
    }
    async getUserByEmail(email: string): Promise<any> {
        try {
            return await userModel.findOne({email})
        }catch (error) {
            console.log(error.message)
            throw new Error(error.message)
        }
    }
    async getUsersByProfession(profession: string): Promise<any> {
        try {
            return await userModel.find({profession})
        }catch (error) {
            console.log(error.message)
            throw new Error(error.message)
        }
    }
    async getAllUsers(): Promise<any> {
        try {
            return await userModel.find()
        }catch (error) {
            console.log(error.message)
            throw new Error(error.message)
        }
    }
    async createUser(userInstance: UserInterface): Promise<any> {
        try {
            const hashedPassword = await this.securityService.encryptPassword(userInstance.password)
            userInstance.dateOfBirth = new Date(userInstance.dateOfBirth)
            userInstance = {...userInstance,password:hashedPassword}
            await userModel.create(userInstance);
            const token = await this.loginUser(userInstance.email,userInstance.password)
            return token
        }catch (error) {
            console.log(error.message)
            throw new Error(error)
        }
    }
    async loginUser(email: string, password: string): Promise<any> {
        try {
            const user:UserInterface = await this.userModel.findOne({email})
            if(!user){
                throw new Error("User is not exist")
            }
            const isMatched = await this.securityService.comparePasswords(password,user.password)
            if(!isMatched){
                throw new Error("Wrong password")
            }
            return await this.securityService.authenticate(user._id,email,password)
        }catch (error) {
            console.log(error.message)
            throw new Error(error.message)
        }
    }
    async editUser(userInstance: UserInterface): Promise<any> {
        try {
            const user = await userModel.findByIdAndUpdate(userInstance._id,userInstance,{useFindAndModify:false,new:true})
            await user.save();
            return user
        }catch (error) {
            console.log(error.message)
            throw new Error(error.message)
        }
    }
    async deleteUser(id: string): Promise<any> {
        try {
            return await userModel.findByIdAndRemove(id)
        }catch (error) {
            console.log(error.message)
            throw new Error(error.message)
        }
    }
}