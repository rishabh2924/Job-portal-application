import mongoose from "mongoose";

const connectDB= async ()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to MongoDb Database ${mongoose.connection.host}`);
    } catch (error) {
        console.log( ` mongoDB error ${error}`);
    }

}
 

export default connectDB