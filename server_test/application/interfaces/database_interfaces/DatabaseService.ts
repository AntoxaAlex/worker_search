import {UserRepositoryInterface} from "./UserRepositoryInterface";
import {WorkRepositoryInterface} from "./WorkRepositoryInterface";

export interface DatabaseService {
    init():Promise<any>
    userRepository:UserRepositoryInterface
    workRepository:WorkRepositoryInterface
}