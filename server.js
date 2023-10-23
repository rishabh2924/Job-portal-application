//imports
import express from "express";
import dotenv from'dotenv';

//config DOT ENV
dotenv.config()

//rest objects
const app=express();
 
//routes
app.get('/',(req,res)=>{
    res.send('<h1>welcome to job portal</h1>')
})

//PORT
const PORT = process.env.PORT || 8080

//listen
app.listen(PORT,()=>{
    console.log(`server in running on port number ${PORT}`);
})