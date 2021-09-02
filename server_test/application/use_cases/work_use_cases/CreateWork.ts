import {UseCaseInterface} from "../../interfaces/use_case_interfaces/UseCaseInterface";
import {WorkRepositoryInterface} from "../../interfaces/database_interfaces/WorkRepositoryInterface";
import {Work} from "../../../entities/Work";
import {UserRepositoryInterface} from "../../interfaces/database_interfaces/UserRepositoryInterface";

export class CreateWork implements UseCaseInterface{
    userRepository:UserRepositoryInterface
    workRepository:WorkRepositoryInterface
    constructor(work_repository:WorkRepositoryInterface,user_repository:UserRepositoryInterface) {
        this.workRepository = work_repository
        this.userRepository = user_repository
    }
    async executeWorkCreation(
        id:string,
        description:{
            workDescription:string,
            address:string,
            payment:number,
            currency:"USD"|"EUR"|"UAH"|"RUB"|"PLZ"
        }):Promise<any>{
        try{
            if(!id && !description.workDescription && !description.address && !description.payment && !description.currency){
                throw new Error("no value")
            }
            const employer = await this.userRepository.getUserByID(id)
            if(!employer){
                throw new Error("no user with this id")
            }
            console.log("Description1:")
            console.log(description.workDescription)
            let newWork = await new Work(id,description)
            return await this.workRepository.createWork(newWork)
        }catch (e) {
            throw new Error(e.message)
        }
    }
}