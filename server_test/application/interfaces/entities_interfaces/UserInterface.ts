import {WorkInterface} from "./WorkInterface";

export interface UserInterface {
    _id?:any,
    email:string,
    password:string,
    avatar:string,
    firstname:string,
    secondname:string,
    fullname:string,
    dateOfBirth:string |Date,
    sex: "male" | "female",
    place:string,
    profession:string,
    telNumber:string | null,
    rating: number | null
    reviews: string[]
    history: WorkInterface[]
    passport: string | null
    certificates: string[]
    about: string | null
    cardNumber: number | null
    minPayment: number | null
    currency: string | null
}