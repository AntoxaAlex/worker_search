import {Router} from "express";
import {WorkController} from "../../../controllers/WorkController";
import {ProjectDependenciesInterface} from "../../../application/interfaces/ProjectDependenciesInterface";
import auth from "../middlewares/auth";

export class WorkRouter {
    router:Router
    controller:WorkController
    dependencies:ProjectDependenciesInterface
    constructor(dependencies:ProjectDependenciesInterface) {
        this.dependencies = dependencies
        this.router = Router()
        this.controller = new WorkController(this.dependencies)

        this.router.route("/")
            .all(auth)
            .post(this.controller.createWork)
        this.router.route("/:workID")
            .all(auth)
            .get(this.controller.getWorkByID)
            .put(this.controller.editWork)
    }
}