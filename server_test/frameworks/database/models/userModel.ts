import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    firstname: {
        type:String,
        required:true
    },
    secondname: {
        type:String,
        required:true
    },
    fullname: {
        type:String,
        required:true
    },
    dateOfBirth: {
        type:Date,
        required:true
    },
    sex:{
        type:String,
        required:true
    },
    place: {
        type:String,
        required:true
    },
    profession: {
        type:String,
        required:true
    },
    avatar: {
        type:String
    },
    telNumber: {
        type:Number
    },
    rating: {
        type:Number
    },
    reviews: {
        type:Array
    },
    history: {
        type:Array
    },
    passport: {
        type:String
    },
    certificates: {
        type:Array
    },
    about: {
        type:String
    },
    cardNumber: {
        type:Number
    },
    minPayment: {
        type:Number
    },
    currency: {
        type:String
    }
})

export default mongoose.model<mongoose.Document>("User",userSchema)