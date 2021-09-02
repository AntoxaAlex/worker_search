import express, {response} from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import {projectDependencies} from "./config/projectDependencies";
import {APIRouter} from "./frameworks/web/routes";
import errorHandler from "./frameworks/error_handling/ErrorHandler"

if(process.env.NODE_ENV !== "production"){
    dotenv.config()
}

const port = process.env.PORT;
const app = express();
projectDependencies.DatabaseService.init().then(response=>{
    console.log(response);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    const apiRouter = new APIRouter(projectDependencies);

    app.use("/api",apiRouter.router);
    app.use(errorHandler)

    app.listen(port,()=>{
        console.log(`Server is running on port:${port}`);
    })
})