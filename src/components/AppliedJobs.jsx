import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "./utility/localeStorage";
import JobsItem from "./JobsItem";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [jobsApplied, setJobsApplied] = useState([]);
    const [displayJobs,setDisplayJobs]=useState([])


const handelFilterJobs= (filter)=>{
    if (filter==="all"){
        setDisplayJobs(jobsApplied)
    }
    else if (filter==="remote"){
        const remoteJobs=jobsApplied.filter(job=> job.remote_or_onsite==='Remote')
        setDisplayJobs(remoteJobs)
    }
    else if (filter==="Onsite"){
        const onsiteJobs=jobsApplied.filter(job=> job.remote_or_onsite==='Onsite')
        setDisplayJobs(onsiteJobs)
    }
}


    useEffect(() => {
        const storedJobId = getStoredJobApplication();
        if (jobs.length > 0) {
            const appliedJobs = jobs.filter(job => storedJobId.includes(job.id))

            setJobsApplied(appliedJobs)
            setDisplayJobs(appliedJobs)
        }
    }, [jobs])

    return (
        <div className="space-y-5 my-10">
             <details className="dropdown">
                <summary className="m-1 btn">Filter</summary>
                <ul className="p-2  shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=>handelFilterJobs("all")}><a>All</a></li>
                    <li onClick={()=>handelFilterJobs("remote")}><a>Remote</a></li>
                    <li onClick={()=>handelFilterJobs("Onsite")}><a>Onsite</a></li>
                </ul>
            </details>
            
           {
            displayJobs.map(jobItems=> <JobsItem key={jobItems.id} jobItems={jobItems} ></JobsItem>)
           }
        </div>
    );
};

export default AppliedJobs;