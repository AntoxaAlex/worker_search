import {UserInterface} from "../application/interfaces/entities_interfaces/UserInterface";
import {WorkInterface} from "../application/interfaces/entities_interfaces/WorkInterface";

export class User implements UserInterface{
    public email:string
    public password:string
    public avatar:string
    public firstname:string
    public secondname:string
    public fullname:string
    public dateOfBirth:string | Date
    public sex:"male" | "female"
    public place:string
    public profession:string
    public telNumber:string | null
    public rating: number | null
    public reviews: string[]
    public history: WorkInterface[]
    public passport: string | null
    public certificates: string[]
    public about: string | null
    public cardNumber: number | null
    public minPayment: number | null
    public currency: string | null

    constructor(email:string,password:string,firstname:string,secondname:string,dateOfBirth:string | Date,sex:"male" | "female",place:string,profession:string) {
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.secondname = secondname;
        this.fullname = firstname + " " + secondname;
        this.dateOfBirth = dateOfBirth;
        this.sex = sex;
        this.place = place;
        this.profession = profession;
        this.avatar = null;
        this.telNumber = null;
        this.about = null;
        this.rating = null;
        this.history = [];
        this.reviews = [];
        this.certificates = [];
        this.passport = null;
        this.cardNumber = null;
        this.minPayment = null;
        this.currency = null;
    }
}