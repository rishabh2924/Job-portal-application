//imports
import express from "express";
import dotenv from'dotenv';
import connectDB from "./config/db.js";
import testRoute from "./routes/testRoute.js"
import authRoutes from "./routes/authRoute.js"
import morgan from "morgan";
import "express-async-errors"
import cors from "cors"
import errorMiddleware from "./middlewares/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js"
import jobRoutes from "./routes/jobsRoutes.js"

//config DOT ENV
dotenv.config()

//mongoDb connection
connectDB();

//rest objects
const app=express();



//middleware
app.use(express.json());
app.use(cors())
app.use(morgan("dev"))
 
//routes
app.use('/api/v1/test',testRoute)
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/user',userRoutes)
app.use('/api/v1/job', jobRoutes)

//validation middleware
app.use(errorMiddleware);

//PORT
const PORT = process.env.PORT || 8080

//listen
app.listen(PORT,()=>{
    console.log(`server in running on port number ${PORT}`);
})