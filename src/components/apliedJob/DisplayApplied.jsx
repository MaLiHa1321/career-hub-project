import {MdLocationOn,MdCurrencyExchange  } from "react-icons/md";
import { Link } from "react-router-dom";

const DisplayApplied = ({job}) => {
    console.log(job)
    const {id,company_name,logo,job_title,remote_or_onsite,location,job_type,salary} = job;

    return (
        <div className="card  bg-base-100 border border-rose-600 p-4 mb-12">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex">
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-12 ">{job_type}</button>
            <div className="card-actions justify-end">
            <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button>
            </Link>
      
          </div>
          </div>
       
          <div className="mt-4 flex gap-4">
            <h2 className="flex mr-2"><MdLocationOn className="text-2xl"></MdLocationOn>{location}</h2>
            <h2 className="flex mr-2"><MdCurrencyExchange></MdCurrencyExchange>{salary}</h2>
       
          </div>
       
        </div>
      </div>
    );

};

export default DisplayApplied;