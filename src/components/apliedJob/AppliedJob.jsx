import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStirage";
import DisplayApplied from "./DisplayApplied";


const AppliedJob = () => {
    const jobs = useLoaderData();
    const [aplied,setAplied] = useState([]);
    useEffect(()=>{
        const storedId = getStoredJobApplication();
        if(jobs.length > 0){
            const jobapplied = [];
            for(const id of storedId){
                const job = jobs.find(job => job.id === id);
                if(job){
                    jobapplied.push(job)
                }
            }

            setAplied(jobapplied)
            console.log(jobs,storedId,jobapplied)
        }
    
    }, [])
    return (
        <div>
            <h1>this is applied job : {aplied.length}</h1>
            <div>
            <details className="dropdown mb-32">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
            </div>
            <ul>
                {
                    aplied.map(job => <DisplayApplied key={job.id} job={job}></DisplayApplied>)
                }
            </ul>

            
        </div>
    );
};

export default AppliedJob;