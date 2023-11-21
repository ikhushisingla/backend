//import model
const Todo=require("../models/Todo")

//define route handler

exports.createTodo=async(req,res)=>{
    try{
        //extract name and roll no from req.bobdy
        const{name,rollNo}=req.body
        //create a new Todo object and insert in db
        const response=await Todo.create({name,rollNo})
        //send json response with success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry created successfully'
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