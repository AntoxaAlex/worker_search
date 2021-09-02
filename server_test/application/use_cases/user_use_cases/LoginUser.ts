import {UserInterface} from "../../interfaces/entities_interfaces/UserInterface";
import {UseCaseInterface} from "../../interfaces/use_case_interfaces/UseCaseInterface";
import {UserRepositoryInterface} from "../../interfaces/database_interfaces/UserRepositoryInterface";
import {ProjectDependenciesInterface} from "../../interfaces/ProjectDependenciesInterface";

export class LoginUser implements UseCaseInterface{
    userRepository:UserRepositoryInterface
    constructor(dependencies:ProjectDependenciesInterface) {
        this.userRepository = dependencies.DatabaseService.userRepository
    }

    async executeUserAuthUseCases(email:string,password:string): Promise<any> {
        try {
            //Check if user is existed
            const user:UserInterface = await this.userRepository.getUserByEmail(email);
            if(!user){
                throw new Error("User does not exist")
            }
            //Login user
            return await this.userRepository.loginUser(email,password)
        }catch (error) {
            console.log(error.message)
            throw new Error(error.message)
        }
    }
}