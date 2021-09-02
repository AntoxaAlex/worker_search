import {UserInterface} from "../entities_interfaces/UserInterface";

export interface UserRepositoryInterface {
    getAllUsers():Promise<any>
    getUserByID(id:string):Promise<any>
    getUserByEmail(email:string):Promise<any>
    getUsersByProfession(profession:string):Promise<any>
    createUser(userInstance:UserInterface):Promise<any>
    editUser(userInstance:UserInterface):Promise<any>
    deleteUser(id:string):Promise<any>
    loginUser(email:string,password:string):Promise<any>
}