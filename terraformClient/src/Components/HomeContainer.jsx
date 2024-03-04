import { useState } from "react";
import { JobsArray } from "../Constants/constants";
import Jobs from "./Jobs"
import ArchivedJobs from "./ArchivedJobs.jsx"


const HomeContainer = ()=>{

  const [availableJobs , setAvailableJobs] = useState([]);
  const [archivedJobs  , setArchivedJobs] = useState([]);

  useState(()=>{
    
    setAvailableJobs(JobsArray);

  },[])


    return (<div className="flex flex-col w-full px-3 py-2">
          <Jobs availableJobs={availableJobs} setAvailableJobs={setAvailableJobs} setArchives={setArchivedJobs}/>
          <ArchivedJobs availableJobs={archivedJobs} setAvailableJobs={setAvailableJobs} setArchives={setArchivedJobs} />
        </div>)


}

export default HomeContainer;