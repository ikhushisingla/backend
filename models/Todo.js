const mongoose=require("mongoose")

const todoSchema=new mongoose.Schema(
    {
        Name:{
            type:String,
            required:true,
            maxLength:30,
        },
        RollNumber:{
            type:Number,
            required:true,
            maxLength:20,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
)

module.exports=mongoose.models("Todo",todoSchema)