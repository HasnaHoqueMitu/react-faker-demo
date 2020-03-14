import React from 'react';
import './JobInfo.css';

const JobInfo = (props) => {
    const{company, job, email, phone} = props.jobin;
    return (
        <div className="jobinfo">
            <h2 className="company-name">{company}</h2>
            <h3>{job}</h3>
            <h6>{email}</h6>
            <p>{phone}</p>
        </div>
    );
};

export default JobInfo;