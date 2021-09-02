import {DatabaseService} from "../../application/interfaces/database_interfaces/DatabaseService";
import mongoose from "mongoose"
import dotenv from "dotenv";
import {UserRepositoryInterface} from "../../application/interfaces/database_interfaces/UserRepositoryInterface";
import {MongoDBUserRepository} from "./MongoDBUserRepository";
import {WorkRepositoryInterface} from "../../application/interfaces/database_interfaces/WorkRepositoryInterface";
import {MongoDBWorkRepository} from "./MongoDBWorkRepository";

if(process.env.NODE_ENV !== "production"){
    dotenv.config()
}

export class MongoDBService implements DatabaseService{
    userRepository:UserRepositoryInterface
    workRepository:WorkRepositoryInterface
    constructor(){
        this.userRepository = new MongoDBUserRepository()
        this.workRepository = new MongoDBWorkRepository()
    }
     async init(): Promise<any> {
        try {
           await mongoose.connect(process.env.DB_URL,{
               useUnifiedTopology:true,
               useNewUrlParser:true
           })
            return "DB is connected"
        }catch (e) {
            throw new Error(e)
        }
    }
}
