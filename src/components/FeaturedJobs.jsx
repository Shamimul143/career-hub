import { useEffect, useState } from "react";
import SingleJob from "./SingleJob";





const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])



    return (
        <div className="my-10">
            <h2 className="text-4xl font-bold text-center">Featured Jobs: {jobs.length}</h2>
            <p className="text-center opacity-60">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="lg:grid grid-cols-2 gap-3 my-10">
                {
                    jobs.slice(0, dataLength).map(job => <SingleJob key={job.id} job={job}></SingleJob>)
                }
            </div>
            <div onClick={()=>setDataLength(jobs.length)} className={dataLength===jobs.length&&"hidden"}>
                <button className="btn btn-primary mx-auto">Show All</button>
            </div>
            
        </div>
    );
};

export default FeaturedJobs;