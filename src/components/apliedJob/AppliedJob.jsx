import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStirage";
import DisplayApplied from "./DisplayApplied";


const AppliedJob = () => {
    const jobs = useLoaderData();
    const [aplied,setAplied] = useState([]);
    const [displayedJobs, setDisplayedJobs] = useState([]);

    const handleJobFilter = filter =>{
        if(filter === 'all'){
            setDisplayedJobs(aplied)
        }
        else if(filter === 'remote'){
            const remoteJobs = aplied.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayedJobs(remoteJobs)
        }
        else if(filter === 'Onsite'){
            const remoteJobs = aplied.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayedJobs(remoteJobs)
        }
    }
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

            setAplied(jobapplied);
            setDisplayedJobs(jobapplied)
            console.log(jobs,storedId,jobapplied)
        }
    
    }, [jobs])
    return (
        <div>
            <h1>this is applied job : {aplied.length}</h1>
            <div >
            <details className="dropdown mb-32">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={() => handleJobFilter('all')}><a>All</a></li>
    <li onClick={() => handleJobFilter('remote')}><a>Remote</a></li>
    <li onClick={() => handleJobFilter('Onsite')}><a>Onsite</a></li>
  </ul>
</details>
            </div>
            <ul>
                {
                    displayedJobs.map(job => <DisplayApplied key={job.id} job={job}></DisplayApplied>)
                }
            </ul>

            
        </div>
    );
};

export default AppliedJob;