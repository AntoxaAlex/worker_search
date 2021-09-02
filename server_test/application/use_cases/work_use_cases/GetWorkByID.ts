import {UseCaseInterface} from "../../interfaces/use_case_interfaces/UseCaseInterface";
import {WorkRepositoryInterface} from "../../interfaces/database_interfaces/WorkRepositoryInterface";

export class GetWorkByID implements UseCaseInterface{
    workRepository:WorkRepositoryInterface
    constructor(work_repository:WorkRepositoryInterface) {
        this.workRepository = work_repository
    }
    async executeGetAndDeleteUseCases(id:string):Promise<any>{
        try {
            if(!id){
                throw new Error("no value")
            }
            const work = this.workRepository.getWorkByID(id)
            if(!work){
                throw new Error("no work")
            }
            return work
        }catch (e) {
            throw new Error(e.message)
        }
    }
}