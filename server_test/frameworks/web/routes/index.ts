import {ProjectDependenciesInterface} from "../../../application/interfaces/ProjectDependenciesInterface";
import {UserRouter} from "./UserRouter";
import {WorkRouter} from "./WorkRouter";
import {Router} from "express";

export class APIRouter {
    router:Router
    dependencies:ProjectDependenciesInterface
    constructor(dependencies:ProjectDependenciesInterface) {
        this.router = Router()
        this.dependencies = dependencies
        const userRouter = new UserRouter(this.dependencies).router
        const workRouter = new WorkRouter(this.dependencies).router
        this.router.use("/user",userRouter)
        this.router.use("/work",workRouter)
    }
}