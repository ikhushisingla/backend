//import model
const Todo=require("../models/Todo")

//define route handler

exports.getTodo=async(req,res)=>{
    try{
        //fetch all todos from database
        const todos=await Todo.find({})
        //send json response with success flag
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:'All Entry data fetched'
            }
        )
    }
    catch(err){
        console.error(err);
        console.log(err)
        res.status(500).json(
            {
                success:false,
                data:'server error',
                message:err.message
            }
        )
    }
}


exports.getTodoById=async(req,res)=>{
    try{
        //extract todo item based on id
        const id=req.params.id
        const todo=await Todo.findById({_id:id})
        
        if(!todo){
            return res.status(404).json(
                {
                    success:false,
                    message:'No data found with particualar given id'
                }
            )
        }
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:`Data with given id ${id} fetched successfully`
            }
        )
    }
    catch(err){
        console.error(err);
        console.log(err)
        res.status(500).json(
            {
                success:false,
                data:'server error',
                message:err.message
            }
        )
    }
}