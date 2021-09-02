import {UserInterface} from "../../interfaces/entities_interfaces/UserInterface";
import {UseCaseInterface} from "../../interfaces/use_case_interfaces/UseCaseInterface";
import {ProjectDependenciesInterface} from "../../interfaces/ProjectDependenciesInterface";
import {UserRepositoryInterface} from "../../interfaces/database_interfaces/UserRepositoryInterface";
import {User} from "../../../entities/User";

export class EditUser implements UseCaseInterface{
    userRepository:UserRepositoryInterface
    constructor(dependencies:ProjectDependenciesInterface) {
        this.userRepository = dependencies.DatabaseService.userRepository
    }


    async executePutUseCases(userInstance:UserInterface): Promise<any> {
        try {
            //Check if user is existed
            const user:UserInterface = await this.userRepository.getUserByID(userInstance._id);
            if(!user){
                throw new Error("No users")
            }
            return await this.userRepository.editUser(userInstance)
        }catch (error) {
            console.log(error.message)
            throw new Error(error.message)
        }
    }
}