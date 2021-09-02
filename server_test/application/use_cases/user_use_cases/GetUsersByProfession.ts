import {UserInterface} from "../../interfaces/entities_interfaces/UserInterface";
import {UseCaseInterface} from "../../interfaces/use_case_interfaces/UseCaseInterface";
import {ProjectDependenciesInterface} from "../../interfaces/ProjectDependenciesInterface";
import {UserRepositoryInterface} from "../../interfaces/database_interfaces/UserRepositoryInterface";

export class GetUsersByProfession implements UseCaseInterface{
    userRepository:UserRepositoryInterface
    constructor(dependencies:ProjectDependenciesInterface) {
        this.userRepository = dependencies.DatabaseService.userRepository
    }

    async executeGetAndDeleteUseCases(profession:string): Promise<any> {
        try {
            //Check if user is existed
            const users:UserInterface[] = await this.userRepository.getUsersByProfession(profession);
            if(!users && users.length === 0){
                throw new Error("No users")
            }
            //Login user
            return users
        }catch (error) {
            console.log(error.message)
            throw new Error(error.message)
        }
    }
}