import {Router} from "express";
import {UserController} from "../../../controllers/UserController";
import {ProjectDependenciesInterface} from "../../../application/interfaces/ProjectDependenciesInterface";
import auth from "../middlewares/auth"

export class UserRouter {
    router:Router
    dependencies:ProjectDependenciesInterface
    controller:UserController
    constructor(dependencies:ProjectDependenciesInterface) {
        this.router = Router()
        this.dependencies = dependencies
        this.controller = new UserController(this.dependencies)

        this.router.route("/new")
            .post(this.controller.registerUser)
        this.router.route("/login")
            .post(this.controller.loginUser)
        this.router.route("/")
            .all(auth)
            .get(this.controller.getAllUsers)
        this.router.route("/:userID")
            .all(auth)
            .get(this.controller.getUserByID)
            .put(this.controller.editUser)
            .delete(this.controller.deleteUser)
        this.router.route("/profession/:profession")
            .all(auth)
            .get(this.controller.getUserByProfession)
    }

}