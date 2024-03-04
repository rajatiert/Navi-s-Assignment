import mongoose from "mongoose";

export const connectDb = async ()=>{

    try{

        const connectionString = "mongodb+srv://rajat:rajat123@cluster0.59ox8gj.mongodb.net/";

        await mongoose.connect(connectionString);
        console.log("data base connected successfully");

    }catch(error)
    {
        console.log("Error connecting the database = ", error?.message);
    }


}