import React from 'react';

const JobInfo = (props) => {
    const{company, job, website, email, phone} = props.jobin;
    return (
        <div>
            <h4 className="company-name">{company}</h4>
        </div>
    );
};

export default JobInfo;