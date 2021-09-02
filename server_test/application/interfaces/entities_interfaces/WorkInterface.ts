import {UserInterface} from "./UserInterface";

export interface WorkInterface {
    _id?:any,
    employee: any
    employer: any
    status: "awaiting" | "accepted" | "in progress" | "completed" | "canceled"
    description:{
        workDescription:string,
        address:string,
        payment:number,
        currency:"USD"|"EUR"|"UAH"|"RUB"|"PLZ"
    }
    isStarted:boolean
    isEnded:boolean
    start: Date | null
    end: Date | null
    photos: string[]
}