import {CustomRequestInterface as Request} from "../application/interfaces/CustomRequestInterface";
import {Response,NextFunction} from "express"
import {ProjectDependenciesInterface} from "../application/interfaces/ProjectDependenciesInterface";
import {GetUserByID} from "../application/use_cases/user_use_cases/GetUserByID";
import {RegisterUser} from "../application/use_cases/user_use_cases/RegisterUser";
import {LoginUser} from "../application/use_cases/user_use_cases/LoginUser";
import {GetAllUsers} from "../application/use_cases/user_use_cases/GetAllUsers";
import {GetUsersByProfession} from "../application/use_cases/user_use_cases/GetUsersByProfession";
import {EditUser} from "../application/use_cases/user_use_cases/EditUser";
import {DeleteUser} from "../application/use_cases/user_use_cases/DeleteUser";

export class UserController {
    dependencies:ProjectDependenciesInterface
    constructor(dependencies:ProjectDependenciesInterface) {
        this.dependencies = dependencies
        this.getUserByID = this.getUserByID.bind(this)
        this.registerUser = this.registerUser.bind(this)
        this.loginUser = this.loginUser.bind(this)
        this.getAllUsers = this.getAllUsers.bind(this)
        this.getUserByProfession = this.getUserByProfession.bind(this)
        this.editUser = this.editUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
    }
    getAllUsers(req:Request,res:Response,next:NextFunction){
        const GetAllUsersCommand = new GetAllUsers(this.dependencies)
        GetAllUsersCommand.executeGetAndDeleteUseCases()
            .then(response=>{
                this.dependencies.logger.info(`Get all users \n ${response}`)
                res.json(response)
            })
            .catch(err=>{
                next(err)
            })
    }
    getUserByID(req:Request,res:Response,next:NextFunction){
        const GetUserByIDCommand = new GetUserByID(this.dependencies)
        const id = req.params.userID
        GetUserByIDCommand.executeGetAndDeleteUseCases(id)
            .then(response=>{
                this.dependencies.logger.info(`Get user by id:${id} \n ${response}`)
            res.json(response)
        })
            .catch(err=>{
                next(err)
            })
    }
    getUserByProfession(req:Request,res:Response,next:NextFunction){
        const GetUsersByProfessionCommand = new GetUsersByProfession(this.dependencies)
        const profession = req.params.profession
        GetUsersByProfessionCommand.executeGetAndDeleteUseCases(profession)
            .then(response=>{
                this.dependencies.logger.info(`Get users by profession:${profession} \n ${response}`)
                res.json(response)
            })
            .catch(err=>{
                next(err)
            })
    }
    registerUser(req:Request,res:Response,next:NextFunction){
        const RegisterUserCommand = new RegisterUser(this.dependencies)
        const {email,password,firstname,secondname,dateOfBirth,sex,place,profession} = req.body
        RegisterUserCommand.executeUserAuthUseCases(email,password,firstname,secondname,dateOfBirth,sex,place,profession).then(response=>{
            this.dependencies.logger.info(`User ${firstname} ${secondname} is successfully registered`)
            res.json(response)
        })
            .catch(err=>{
                next(err)
            })
    }
    loginUser(req:Request,res:Response,next:NextFunction){
        const LoginUserCommand = new LoginUser(this.dependencies)
        const {email,password} = req.body
        LoginUserCommand.executeUserAuthUseCases(email,password).then(response=>{
            this.dependencies.logger.info(`User with email:${email} is successfully logged in`)
            res.json(response)
        })
            .catch(err=>{
                next(err)
            })
    }
    editUser(req:Request,res:Response,next:NextFunction){
        const EditUserCommand = new EditUser(this.dependencies)
        const {userInstance} = req.body
        EditUserCommand.executePutUseCases(userInstance).then(response=>{
            this.dependencies.logger.info(`User ${userInstance.firstname} ${userInstance.secondname} is successfully edited`)
            res.json(response)
        })
            .catch(err=>{
                next(err)
            })
    }
    deleteUser(req:Request,res:Response,next:NextFunction){
        const DeleteUserCommand = new DeleteUser(this.dependencies)
        const id = req.params.userID
        DeleteUserCommand.executeGetAndDeleteUseCases(id).then(response=>{
            this.dependencies.logger.info(`User ${id} is successfully deleted`)
            res.json(response)
        })
            .catch(err=>{
                next(err)
            })
    }
}