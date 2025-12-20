import jwt from "jsonwebtoken";
import userModel from "../Models/user.js";
import bcrypt from "bcrypt";

export  const signup = async (req, res) =>{
  try{
    const {name, email, password} = req.body;
    const user = await userModel.findOne({email});
    if(user){
        return res.status(409)
         .json({message: "user already exists, you can login", succes: false});
    }

    const hassedPassword = await bcrypt.hash(password, 10);

    await userModel.create({
        name,
        email,
        password: hassedPassword,
    });

    return res.status(201)
      .json({message: "Account create successfully",
        success: true,
      });
  }catch(err){
    console.log(err);
    return res.status(500).json({ message: "Server error", success: false });
  }

};

export const login = async (req, res) => {

    try{
 const { email, password} = req.body;
   
    if(!email || !password){
        return res.status(400)
         .json({message: "something is missing", succes: false});
    }
    
     const user = await userModel.findOne({email});

   if(!user){
    return res.status(400)
         .json({message: "icorrect password or email", succes: false});
   }

   const isPasswordMatch = await bcrypt.compare(password, user.password);

   if(!isPasswordMatch){
    return res.status(400)
         .json({message: "icorrect password or email", succes: false});
   }
      
   const tokenData = {userId: user._id};
   const token = jwt.sign(tokenData, process.env.SECRET_KEY,{
    expiresIn : "2d",
   });

   const userData = {
    email : user.email,
    name: user.name,
   }
   return res
   .status(200)
   .cookie("token", token, {
    maxAge: 2 * 24 * 60 * 60 * 1000,
    secure: true,
    httpOnly: true,
    sameSite: "none",
   })
   .json({
    message: `Welcome back ${user.name}`,
    success: true,
    userData,
   });
  }catch(err){
    console.log(err);
    return res.status(500).json({ message: "Server error", success: false });
  }
};

export const logout = async (req, res) => {
 try{ res.status(200)
  .cookie("token", "", {maxAge: 0})
  .json({
    message: "loggout successful",
    success: true,
  })}catch(error){
    console.log(err);
    return res.status(500).json({ message: "Server error", success: false });
  }
};



