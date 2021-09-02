import {WorkInterface} from "../application/interfaces/entities_interfaces/WorkInterface";
import {UserInterface} from "../application/interfaces/entities_interfaces/UserInterface";
import {ObjectId} from "mongoose";

export class Work implements WorkInterface{
    _id?:any
    employee: any
    employer: any
    description:{
        workDescription:string,
        address:string,
        payment:number,
        currency:"USD"|"EUR"|"UAH"|"RUB"|"PLZ"
    }
    status: "awaiting" | "accepted" | "in progress" | "completed" | "canceled"
    isStarted:boolean
    isEnded:boolean
    start: Date | null
    end: Date | null
    photos: string[]

    constructor(
        employer:any,
        description:{
            workDescription:string,
            address:string,
            payment:number,
            currency:"USD"|"EUR"|"UAH"|"RUB"|"PLZ"
        }) {
        this.employer = employer
        this.employee = null
        console.log("Description2:"+description.workDescription)
        this.description = {
            workDescription:description.workDescription,
            address:description.address,
            payment: description.payment,
            currency:description.currency
        }
        this.status = "awaiting"
        this.isStarted = false
        this.isEnded = false
        this.start = null
        this.end = null
        this.photos = []
    }
}