import {DatabaseService} from "./database_interfaces/DatabaseService";
import {SecurityInterface} from "./security_interfaces/SecurityInterface";
import {Logger} from "winston"

export interface ProjectDependenciesInterface {
    DatabaseService:DatabaseService,
    SecurityService:SecurityInterface,
    logger:Logger
}