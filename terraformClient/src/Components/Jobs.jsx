import React, { useEffect } from "react";
import { fetchJobs } from "../apiCalls/api";
import { JobsArray } from "../Constants/constants";

const fetchAllJobs = async () => {
  await fetchJobs();
}

const Jobs = ({availableJobs , setAvailableJobs , setArchives}) => {


  function addToArchive(filterIndex){

    setArchives(prev=>[...prev , availableJobs[filterIndex]]);

    const filteredJobs = availableJobs.filter((jobs , index)=>index != filterIndex );
    setAvailableJobs(filteredJobs)

  }

  const todaysDate = new Date().toDateString();

  console.log( "todays date = ", todaysDate.substring(7,10));

  return (<div className="flex flex-col gap-4 w-full">
    <div className="flex"> <p className="text-2xl"> Available Jobs </p> </div>
    <div className="grid grid-cols-2 md:grid-cols-3  gap-4 w-full">
      {
        availableJobs?.length >0 ?  availableJobs.map((job, index) => {

           console.log(" jobs deadline = ",  )

          return <div className={`flex flex-col gap-2 shadow-lg border border-black rounded-lg p-4 ${ job?.deadline.substring(0,2) -todaysDate.substring(7,10) >= 14 ? "bg-red-300":"bg-green-300"} `} key={index}>
            <div className="flex flex-row justify-between">
              <div>Title</div>
              <div>{job?.title}</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>Description</div>
              <div>{job?.description}</div>
            </div>

            <div className="flex flex-row justify-between">
              <div>Location</div>
              <div>{job?.location}</div>
            </div>

            <div className="flex flex-row justify-between">
              <div>Deadline</div>
              <div>{job?.deadline}</div>
            </div>

            <div className="flex flex-row justify-between">
              <div>Contact</div>
              <div>{job?.contant}</div>
            </div>

            <div className="flex flex-row justify-between">
              <div>Email</div>
              <div>{job?.email}</div>
            </div>

            <div className="flex flex-row justify-end">
                 <button onClick={()=>addToArchive(index)} className="bg-black rounded-lg px-3 py-2 text-white">Add To Archive</button>
            </div>

            

          </div>
        }) : <p>No Jobs Available</p>
      }
    </div>
  </div>)
}

export default Jobs;
