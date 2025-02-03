import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://sudipta8534:100202@cluster0.dtu71.mongodb.net/Bite').then(()=>console.log("DB connected"));
}

