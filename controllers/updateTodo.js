//import model
const Todo=require("../models/Todo")

//define route handler

exports.updateTodo=async(req,res)=>{
    try{
        const {id}=req.params
        const {name,rollNo}=req.body
        
        const todo=await Todo.findByIdAndUpdate(
            {_id:id},
            {name,rollNo,updateAt:Date.now()}
        )
        //send json response with success flag
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:'Updated successfully'
            }
        )

    }
    catch(err){
        console.error(err);
        console.log(err)
        res.status(500).json(
            {
                success:false,
                data:'Internal server error',
                message:err.message
            }
        )
    }
}