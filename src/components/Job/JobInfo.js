import React from 'react';
import './JobInfo.css';

const JobInfo = (props) => {
    const{company, job, email, phone} = props.jobin;
    return (
        <div className="jobinfo">
            <h2 className="company-name">Company Name: {company}</h2>
            <h3>Position: {job}</h3>
            <h6>Email: {email}</h6>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default JobInfo;