import React, {useEffect} from "react";
import { fetchJobs } from "../apiCalls/api";

const fetchAllJobs = async ()=>{
  await fetchJobs();
}

const Jobs = ()=>{

  useEffect(()=>{
    fetchAllJobs();
  },[])

  return (<div>
       <h1>Jobs will be shown here </h1>
    </div>)
}

export default Jobs;
