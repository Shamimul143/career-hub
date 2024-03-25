import PropTypes from 'prop-types';
const JobsItem = ({ jobItems }) => {

    const { logo, job_title, company_name, job_description,remote_or_onsite,job_type } = jobItems

    return (
        <div>
           

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={logo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{job_title}</h1>
                        <p>{company_name}</p>
                        <p className="py-6">{job_description}</p>
                        <button className='btn btn-primary mr-5'>{remote_or_onsite}</button>
                        <button className='btn btn-primary'>{job_type}</button>
                        
                    </div>
                </div>
            </div>


        </div>
    );
};

JobsItem.propTypes = {
    jobItems: PropTypes.array
}


export default JobsItem;