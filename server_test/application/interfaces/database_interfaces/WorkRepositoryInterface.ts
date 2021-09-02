import {WorkInterface} from "../entities_interfaces/WorkInterface";

export interface WorkRepositoryInterface {
    getWorkByID(id:string):Promise<any>
    createWork(workInstance:WorkInterface):Promise<any>
    editWork(workInstance:WorkInterface):Promise<any>
}