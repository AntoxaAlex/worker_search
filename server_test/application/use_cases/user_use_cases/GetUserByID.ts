import {UserInterface} from "../../interfaces/entities_interfaces/UserInterface";
import {UseCaseInterface} from "../../interfaces/use_case_interfaces/UseCaseInterface";
import {ProjectDependenciesInterface} from "../../interfaces/ProjectDependenciesInterface";
import {UserRepositoryInterface} from "../../interfaces/database_interfaces/UserRepositoryInterface";

export class GetUserByID implements UseCaseInterface{
    userRepository:UserRepositoryInterface
    constructor(dependencies:ProjectDependenciesInterface) {
        this.userRepository = dependencies.DatabaseService.userRepository
    }

    async executeGetAndDeleteUseCases(id:string): Promise<any> {
        try {
            //Check if user is existed
            const user:UserInterface = await this.userRepository.getUserByID(id);
            if(!user){
                throw new Error("User does not exist")
            }
            //Login user
            return user
        }catch (error) {
            console.log(error.message)
            throw new Error(error.message)
        }
    }
}