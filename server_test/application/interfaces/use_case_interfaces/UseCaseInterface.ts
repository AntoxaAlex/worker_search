import {UserInterface} from "../entities_interfaces/UserInterface";
import {WorkInterface} from "../entities_interfaces/WorkInterface";

export interface UseCaseInterface {
    executeGetAndDeleteUseCases?: (
        id?:string,
    ) => Promise<any>,
    executePutUseCases?: (
        instance?:UserInterface|WorkInterface
    ) => Promise<any>,
    executeUserAuthUseCases?: (
        email?:string,
        password?:string,
        firstname?:string,
        secondname?:string,
        dateOfBirth?:string|Date,
        sex?:"male"|"female",
        place?:string,
        professiong?:string
    ) => Promise<any>,
    executeWorkCreation?:(
        employerID:string,
        description:{
            workDescription:string,
            address:string,
            payment:number,
            currency:"USD"|"EUR"|"UAH"|"RUB"|"PLZ"
        }
    )=>Promise<any>
}