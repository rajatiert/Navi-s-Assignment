import React, { useEffect } from "react";



const ArchivedJobs = ({availableJobs , setAvailableJobs , setArchives}) => {

  useEffect(() => {
    //fetchAllJobs();
  }, [])

  const todaysDate = new Date().toDateString();

  


  return (<div className="flex flex-col gap-4 w-full">
    <div className="flex text-2xl">Archived Jobs</div>
    <div className="grid grid-cols-2 md:grid-cols-3  gap-4 w-full">
      {   
        availableJobs?.length > 0 ? availableJobs.map((job, index) => {
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

        

          </div> 
        }): <p>No Archive Jobs Available</p>
      }
    </div>
  </div>)
}

export default ArchivedJobs;
