import {CustomRequestInterface as Request} from "../application/interfaces/CustomRequestInterface";
import {Response, NextFunction} from "express"
import {ProjectDependenciesInterface} from "../application/interfaces/ProjectDependenciesInterface";
import {GetWorkByID} from "../application/use_cases/work_use_cases/GetWorkByID";
import {CreateWork} from "../application/use_cases/work_use_cases/CreateWork";
import {EditWork} from "../application/use_cases/work_use_cases/EditWork";

export class WorkController {
    dependencies:ProjectDependenciesInterface
    constructor(dependencies:ProjectDependenciesInterface) {
        this.dependencies = dependencies;
        this.getWorkByID = this.getWorkByID.bind(this)
        this.createWork = this.createWork.bind(this)
        this.editWork = this.editWork.bind(this)
    }
    getWorkByID(req:Request,res:Response,next:NextFunction){
        const GetWorkByIDCommand = new GetWorkByID(this.dependencies.DatabaseService.workRepository)
        const id = req.params.workID
        GetWorkByIDCommand.executeGetAndDeleteUseCases(id)
            .then(response=>{
                this.dependencies.logger.info(`Successfully get work`)
                res.json(response)
        })
            .catch(err=>{
                next(err)
            })
    }
    createWork(req:Request,res:Response,next:NextFunction){
        const CreateWorkCommand = new CreateWork(this.dependencies.DatabaseService.workRepository,this.dependencies.DatabaseService.userRepository)
        const id = req.user._id
        const {description} = req.body
        CreateWorkCommand.executeWorkCreation(id,description)
            .then(response=>{
                this.dependencies.logger.info(`Work is successfully created`)
                res.json(response)
            })
            .catch(err=>{
                next(err)
            })
    }
    editWork(req:Request,res:Response,next:NextFunction){
        const EditWorkCommand = new EditWork(this.dependencies.DatabaseService.workRepository,this.dependencies.DatabaseService.userRepository)
        const {workInstance} = req.body
        EditWorkCommand.executePutUseCases(workInstance)
            .then(response=>{
                this.dependencies.logger.info(`Work is successfully edited`)
                res.json(response)
            })
            .catch(err=>{
                next(err)
            })
    }
}