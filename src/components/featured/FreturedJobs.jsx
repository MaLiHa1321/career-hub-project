import { useEffect, useState } from "react";
import Jobs from "../job/Jobs";


const FreturedJobs = () => {

    const [job, setJob] = useState([])
    // this is not the best way to load show all data

    const [datalength, setDataLength] = useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJob(data))
    },[])
    return (
        <div>
        <div className="text-center">
            <h2 className="text-4xl">Fetured Jobs:</h2>
            <p className=" mt-5">Explore thousands of job opportunities with all the information you need. Its your future</p>

        </div>
        <div className="grid grid-cols-2 gap-6 mt-5 mb-12">
            {
                job.slice(0,datalength).map(jobs => <Jobs key={jobs.id} jobs={jobs}></Jobs>)
            }
            <div className={datalength === job.length ? "hidden" : ''}>
                <button
                onClick={() => setDataLength(job.length)}
                 className="btn btn-primary">show all job</button>
            </div>

        </div>

        </div>
    );
};

export default FreturedJobs;