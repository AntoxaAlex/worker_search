import {UseCaseInterface} from "../../interfaces/use_case_interfaces/UseCaseInterface";
import {WorkRepositoryInterface} from "../../interfaces/database_interfaces/WorkRepositoryInterface";
import {Work} from "../../../entities/Work";
import {UserRepositoryInterface} from "../../interfaces/database_interfaces/UserRepositoryInterface";
import {WorkInterface} from "../../interfaces/entities_interfaces/WorkInterface";

export class EditWork implements UseCaseInterface{
    userRepository:UserRepositoryInterface
    workRepository:WorkRepositoryInterface
    constructor(work_repository:WorkRepositoryInterface,user_repository:UserRepositoryInterface) {
        this.workRepository = work_repository
    }
    async executePutUseCases(workInstance:WorkInterface):Promise<any>{
        try{
            if(!workInstance){
                throw new Error("no value")
            }
            const work = await this.workRepository.getWorkByID(workInstance._id)
            if(!work){
                throw new Error("no such work")
            }
            return await this.workRepository.editWork(workInstance)
        }catch (e) {
            throw new Error(e.message)
        }
    }
}