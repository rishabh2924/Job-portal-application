import userModel from "../models/userModel.js";

export const registerController = async (req, res, next) => {
  const { name, email, password } = req.body;
  //validate
  try {
    

    

  if (!name) {
    next("name is required");
  }
  if (!email) {
    next("email is required");
  }
  if (!password) {
    next("password is required ");
  }
  const exisitingUser = await userModel.findOne({ email });
  if (exisitingUser) {
    next("Email Already Register Please Login");
  } 
   const user = await userModel.create({ name, email, password });
  //token 
  const token =user.createJwt();

  res.status(201).send({
    success: true,
    message: "user Created successfully",
    user,
    token
  });}
  catch (error) {
    console.log(error);
  }
};
export const loginController=async (req,res,next)=>{
  const {email,password}=req.body;
  if(!email || !password){
    next('provide all fields')

  }
  //find user by email
  const user=await userModel.findOne({email})
  if(!user){
    next("Invalid credential");
  }
  // compare password
  const isMatch=await user.comparePassword(password)
  if(!isMatch){
    next("invalid credential")
  }
  user.password=undefined;
  const token=user.createJwt()
  res.status(200).json({
    success:true,
    message:"login successfully",
    user,
    token,

  })
}
