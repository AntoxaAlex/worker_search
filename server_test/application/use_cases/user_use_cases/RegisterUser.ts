import {User} from "../../../entities/User";
import {UserInterface} from "../../interfaces/entities_interfaces/UserInterface";
import {UseCaseInterface} from "../../interfaces/use_case_interfaces/UseCaseInterface";
import {UserRepositoryInterface} from "../../interfaces/database_interfaces/UserRepositoryInterface";
import {ProjectDependenciesInterface} from "../../interfaces/ProjectDependenciesInterface";

export class RegisterUser implements UseCaseInterface{
    userRepository:UserRepositoryInterface
    constructor(dependencies:ProjectDependenciesInterface) {
        this.userRepository = dependencies.DatabaseService.userRepository
    }

    async executeUserAuthUseCases(
        email?:string,
        password?:string,
        firstname?:string,
        secondname?:string,
        dateOfBirth?:string|Date,
        sex?:"male"|"female",
        place?:string,
        profession?:string): Promise<any> {
        try {
            //Check if user is already existed
            const user:UserInterface = await this.userRepository.getUserByEmail(email);
            if(user){
                throw new Error("User is already exists")
            }
            //If not,create new user and return result
            let newUser:UserInterface = await new User(email,password,firstname,secondname,dateOfBirth,sex,place,profession)
            console.log(newUser)
            return await this.userRepository.createUser(newUser)
        }catch (error) {
            console.log(error.message)
            throw new Error(error.message)
        }
    }
}