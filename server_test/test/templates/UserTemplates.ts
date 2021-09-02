import {UserInterface} from "../../application/interfaces/entities_interfaces/UserInterface";
import {UserRepositoryInterface} from "../../application/interfaces/database_interfaces/UserRepositoryInterface";

let users:UserInterface[] = [
    {
        _id: 'qwerty789',
        email: 'antoxaalex@gmail.com',
        password: 'ballislife1995',
        firstname: 'Anton',
        secondname: 'Pertsevoy',
        fullname: 'Anton Pertsevoy',
        dataOfBirth: new Date(1995,3,2),
        sex: 'male',
        place: 'Odessa',
        profession: 'Developer',
        avatar: null,
        telNumber: null,
        about: null,
        rating: null,
        history: [],
        reviews: [],
        certificates: [],
        passport: null,
        cardNumber: null,
        minPayment: null,
        currency: null
    },
    {
        _id: 'qwerty790',
        email: 'genabukin@gmail.com',
        password: 'ballislife1996',
        firstname: 'Gena',
        secondname: 'Bukin',
        fullname: 'Gena Bukin',
        dataOfBirth: new Date(1995,8,23),
        sex: 'male',
        place: 'Kiev',
        profession: 'Developer',
        avatar: null,
        telNumber: null,
        about: null,
        rating: null,
        history: [],
        reviews: [],
        certificates: [],
        passport: null,
        cardNumber: null,
        minPayment: null,
        currency: null
    },
    // {
    //     _id: 'qwerty791',
    //     email: 'anna@gmail.com',
    //     password: 'ballislife1997',
    //     firstname: 'Anna',
    //     secondname: 'Karenina',
    //     fullname: 'Anna Karenina',
    //     dataOfBirth: new Date(1998,8,25),
    //     sex: 'male',
    //     place: 'Lviv',
    //     profession: 'Designer',
    //     avatar: null,
    //     telNumber: null,
    //     about: null,
    //     rating: null,
    //     history: [],
    //     reviews: [],
    //     certificates: [],
    //     passport: null,
    //     cardNumber: null,
    //     minPayment: null,
    //     currency: null
    // }
]

export const userTemplate:UserInterface = {
    _id: 'qwerty792',
        email: 'anna@gmail.com',
    password: 'ballislife1997',
    firstname: 'Anna',
    secondname: 'Karenina',
    fullname: 'Anna Karenina',
    dataOfBirth: new Date(1998,8,25),
    sex: 'male',
    place: 'Lviv',
    profession: 'Designer',
    avatar: null,
    telNumber: null,
    about: null,
    rating: null,
    history: [],
    reviews: [],
    certificates: [],
    passport: null,
    cardNumber: null,
    minPayment: null,
    currency: null
}

export const userRepositoryTemplate:UserRepositoryInterface = {
    async getAllUsers():Promise<any>{
        return users
    },
    async getUserByID(id:string):Promise<any>{
        try {
            return users.filter(user=>user._id === id)[0]
        }catch (e) {
            throw new Error(e.message)
        }
    },
    async getUsersByProfession(profession:string):Promise<any>{
        let foundUsers = users.filter(user=>user.profession === profession)
        return foundUsers
    },
    async createUser(userInstance:UserInterface):Promise<any>{
        try {
            users.push(userInstance)
            return users[users.length-1]
        }catch (e) {
         throw new Error(e.message)
        }
    },
    async editUser(userInstance:UserInterface):Promise<any>{
        let editedUser:UserInterface
        let replacedIndex:number
        users.forEach((user,i)=>{
            if(user._id === userInstance._id){
                editedUser = userInstance
                replacedIndex = i
            }
        })
        users[replacedIndex] = editedUser
        return users
    },
    async deleteUser(id:string):Promise<any>{
        users = users.filter(user=>user._id !== id)
        return users
    },
    async loginUser(email:string,password:string):Promise<any>{
        return email + "><" + password
    }
}