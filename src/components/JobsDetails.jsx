import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveAppliedJobs } from "./utility/localeStorage";

const JobsDetails = () => {

    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title } = job

    const handleJobs=()=>{

        saveAppliedJobs(idInt)
        
            toast("Success fully applied")
        }
        

    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 space-y-4">
                <p><span className="text-2xl font-bold">job_description:</span>{job_description}</p>
                <p><span className="text-2xl font-bold">job_description:</span>{job_responsibility}</p>
                <p className="text-2xl font-bold">educational_requirements:</p>
                <p>{educational_requirements}</p>
                <p className="text-2xl font-bold">experiences:</p>
                <p>{experiences}</p>
            </div>
            <div className="col-span-1">
                <div className="bg-slate-100 rounded-md my-4 p-4 space-y-4 ">
                    <h2 className="text-2xl font-bold">Job Details</h2>
                    <hr />
                    <h3>Salary: {salary}</h3>
                    <h3>Job Title: {job_title}</h3>
                </div>
                <button onClick={handleJobs} className="btn btn-primary">Apply Naw</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobsDetails;