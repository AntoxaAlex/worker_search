import mongoose from "mongoose"

const workSchema = new mongoose.Schema({
    employee:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    employer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    description:{
        workDescription:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        payment:{
            type:Number,
            required:true
        },
        currency:{
            type:String,
            required:true
        }
    },
    isStarted:{
        type:Boolean
    },
    isEnded:{
        type:Boolean
    },
    start:{
        type:Date
    },
    end:{
        type:Date
    },
    photos:[
        {
            type:String
        }
    ]
})

export default mongoose.model("Work",workSchema)