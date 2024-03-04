import mongoose from "mongoose";
import { Schema } from "mongoose";

const jobSchema = new Schema({
    title:{
        type:String,
        required:true
    } , 
    description : {
        type:String,
        required:true,
    },
    location :{
        type:String,
        required:true,
    },
    deadline :{
        type:Date,
        required:true,
    },
    contactNumber :{
        type:String,
        required:true, 
    },
    contactEmail:{
        type:String,
        required:true,
    }
});

const Jobs = new mongoose.model("jobs", jobSchema);

export default Jobs;