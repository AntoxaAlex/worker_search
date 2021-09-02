import {WorkRepositoryInterface} from "../../application/interfaces/database_interfaces/WorkRepositoryInterface";
import {WorkInterface} from "../../application/interfaces/entities_interfaces/WorkInterface";
import workModel from "./models/workModel";
import {Model,Document} from "mongoose"

export class MongoDBWorkRepository implements WorkRepositoryInterface{
    workModel:Model<Document,any,any>
    constructor() {
        this.workModel = workModel
    }
    async getWorkByID(id: string): Promise<any> {
        try {
            return await workModel.findById(id)
        }catch (e) {
            throw new Error(e.message)
        }
    }
    async createWork(workInstance: WorkInterface): Promise<any> {
        try {
            console.log(workInstance)
            return await workModel.create(workInstance)
        }catch (e) {
            throw new Error(e.message)
        }
    }
    async editWork(workInstance: WorkInterface): Promise<any> {
        try {
            const work = await workModel.findByIdAndUpdate(workInstance._id,workInstance,{useFindAndModify:false,new:true})
            await work.save()
            return work
        }catch (e) {
            throw new Error(e.message)
        }
    }
}