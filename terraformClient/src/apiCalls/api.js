import { apiBaseUrl } from "../Constants/constants";

export const fetchJobs = async ()=>{
    
    const url = `${apiBaseUrl}/getJobs`;
   
    console.log("url = ", url);
    const allJobs = await fetch(url).then( async (response) =>{

        if(response.ok)
        {
            const allJobsInDb = await response.json();
            console.log("all books = " , allJobsInDb);
            return allJobsInDb;
        }
        else
          return null;

    })

    return allJobs;

}