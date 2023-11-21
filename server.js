const express=require('express')
const app=express()

//load config from env
require("dotenv").config()
const PORT=process.env.PORT || 8000;

//middleware to parse json request.body
app.use(express.json())

//import routes for todo app
const todoRoutes=require("./routes/todo")
//mount the todo api routes
app.use("/api/v1",todoRoutes)

//servere start
app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`)
})

//connect to the database
const dbConnect=require("./config/database")
dbConnect()

//default route
app.get("/",(req,res)=>{
    res.send("Hello everyone")
})