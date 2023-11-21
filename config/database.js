const mongoose=require('mongoose')

//isse jo b env mai likha hoga wo process object mai load ho jaega
require("dotenv").config()
//establish connection between aplication and database
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{console.log("DB connection succesful")})
    .catch((error)=>{
        console.log("Issue in DB connection")
        console.error(error.message)
        process.exit(1)
    })
}

module.exports=dbConnect