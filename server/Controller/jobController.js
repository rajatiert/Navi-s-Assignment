import mongoose from "mongoose";
import Jobs from "../Schema/jobSchema.js";

export const getJobs = async (req, res) => {

    try {

        const allJobs = await Jobs.find({});
        return res.status(200).json({ data: allJobs, message: "Job fetched successfully" });

    } catch (error) {
        return res.status(500).json({ "data": null, "message": error?.message });
    }

}

export const createJobs = async (req, res) => {

    try {

        const jobData = req.body;

        console.log("job data coming is = ", jobData);
        
        const newJobsData = new Jobs(jobData);

        await newJobsData.save();

        return res.status(200).json({ "data": newJobsData, "message": "Job Created Succcessfully" });

    } catch (error) {
        return res.status(500).json({ "data": null, "message": error?.message });
    }

}