
import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';
const SingleJob = ({ job }) => {
    const { id, logo, job_title,company_name,remote_or_onsite,job_type,location,salary, } = job
    return (
        <div className=" card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">                
                <h2 className="card-title">{job_title}</h2>
                <h3>{company_name}</h3>
                <div className='flex gap-2'>
                    <button className='btn btn-primary'>{remote_or_onsite}</button>
                    <button className='btn btn-primary'>{job_type}</button>
                </div>
                <div className='flex gap-2'>
                    <span><CiLocationOn /></span>
                    <h2>{location}</h2>
                    <span><CiDollar /></span>
                    <h2> Salary: {salary}</h2>
                </div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <Link to={`/job/${id}`}>
                  <button className="btn btn-primary">vew details</button>
                  </Link>
                </div>
            </div>
        </div>
    );
};

SingleJob.propTypes = {
    job: PropTypes.array
};

export default SingleJob;