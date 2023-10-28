import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs"
import  Jwt from "jsonwebtoken";
//schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        validate:validator.isEmail
    },
    password:{
        type:String,
        required:[true,'password is required'],
        select:true
    },
    location:{
        type:String,
        default:"India"
    }
},
{timestamps:true}
)
// compare password
userSchema.methods.comparePassword=async function (userPassword) {
    const isMatch=await bcrypt.compare(userPassword,this.password)
}

//middlewares
userSchema.pre('save',async function(){
    if(!this.isModified) return ;
    const salt =await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
})
userSchema.methods.createJwt=function(){
    return Jwt.sign({userId:this._id},process.env.JWT_SECRET,{expiresIn:'1d'})
}

export default mongoose.model('User',userSchema)