import {ProjectDependenciesInterface} from "../application/interfaces/ProjectDependenciesInterface";
import {MongoDBService} from "../frameworks/database/MongoDBService";
import {SecurityService} from "../frameworks/security/SecurityService";
import {logger} from "../frameworks/logging/winston";

export const projectDependencies:ProjectDependenciesInterface = {
    SecurityService:new SecurityService(),
    DatabaseService:new MongoDBService(),
    logger
}
