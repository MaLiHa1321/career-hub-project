import { useLoaderData, useParams } from "react-router-dom";
import {MdCurrencyExchange ,MdPermPhoneMsg,MdOutlineMailOutline,MdLocationOn } from "react-icons/md";
import {LiaBookSolid} from "react-icons/lia" 
import toast, { Toaster } from 'react-hot-toast';
import { saveJobApplication } from "../../utility/localStirage";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
    const jobs = useLoaderData();
    
    const {id}= useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const {job_description,job_responsibility,educational_requirements,experiences,salary,job_title} = job
 

    const notify = () =>{
        saveJobApplication(idInt)
        toast.success('you have succesfully aplyed');
    }

  
    return (
        <div>
            <Helmet>
                <title>Applied job</title>
            </Helmet>
<Toaster position="top-center" reverseOrder={false}/>
            <h1>the deatils of {job.job_title}</h1>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 mb-12 p-4">
                  <p className="mb-4"><span className="font-bold">Job Description: </span>{job_description}</p>
                  <p className="mb-4"><span className="font-bold">Job Responsibility: </span>{job_responsibility}</p>
                  <p className="mb-4"><span className="font-bold">Educational Requirements: </span>{educational_requirements}</p>
                  <p className="mb-4"><span className="font-bold">Experiences: </span>{experiences}</p>
                </div>
                <div className="border mb-12 p-2">
                    <h1 className="text-2xl font-bold">Job Details</h1> <hr />
                    <div className="p-2">
                    <h2 className="flex items-center mr-2 mb-4 "><MdCurrencyExchange></MdCurrencyExchange>Salary: {salary}</h2>
                    <h2 className="flex items-center mr-2 "><LiaBookSolid></LiaBookSolid>{job_title}</h2>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Contact Information</h1> <hr />
                        <div className="p-2">
                        <h2 className="flex items-center mr-2 mb-4 "><MdPermPhoneMsg></MdPermPhoneMsg> {job.contact_information.phone}</h2>
                        <h2 className="flex items-center mr-2 mb-4 "><MdOutlineMailOutline></MdOutlineMailOutline> {job.contact_information.email}</h2>
                        <h2 className="flex items-center mr-2 mb-4 "><MdLocationOn className="text-2xl"></MdLocationOn> {job.contact_information.address}</h2>


                        </div>
                    </div>
                    <div onClick={notify}>
                    <button  className="btn btn-primary w-full">Apply now</button>
                    </div>
                  
                </div>

            </div>
            
        </div>
    );
};

export default JobDetails;