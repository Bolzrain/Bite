import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


//login user
const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    try {
        //checking if an user is available bearing the given email id
        const user=await userModel.findOne({email});

        //if we do not get any user
        if (!user) {
            return res.json({success:false,message:"User does not exist"})
        }

        //if we get the user, we match the given password to stored password
        const isMatch=await bcrypt.compare(password,user.password)
        
        //if passwords do not match
        if (!isMatch) {
            return res.json({success:false,message:"Invalid credentials"})
        }

        //if passwords match, a token is generated and sent as a response
        const token=createToken(user._id);
        res.json({success:true,token})
    }
    //if any error in try block
    catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}
//creating jwt token
const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user
const registerUser=async(req,res)=>{
    const {name,password,email}=req.body;
    try {
        //checking if user already exists
        const exists=await userModel.findOne({email});
        if (exists) {
            return res.json({success:false,message:"User already exists"})
        }
        //validating email format and string password
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Please enter a valid email"})
        }
        //checking if password length is less than 8
        if (password.length<8) {
            return res.json({success:false,message:"Please enter a strong password"})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)

        //creating new user
        const newUser=new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        //saving user in the database
        const user= await newUser.save()
        
        //creating token for user
        const token=createToken(user._id)
        res.json({success:true,token})
    } 
    catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {loginUser,registerUser}