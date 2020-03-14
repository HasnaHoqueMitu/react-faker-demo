import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, fad } from '@fortawesome/free-solid-svg-icons'
import './PeoplesInfo.css';

const PeoplesInfo = (props) => {
    const{name, location, profession, salary, photo, email} = props.ppl;
    return (
        <div className="people">
            <div className="profilePic">
                <img src={photo} alt=""/>
            </div>
            <div className="profileDescription">
                <h4 className="people-name">{name}</h4>
                <h5>{profession}</h5>
                <p><small>Email Address: {email}</small></p>
                <h5>Current Salary: ${salary}</h5>
                <p><small>Living in {location}</small></p>

               
                <button 
                    className="main-button" 
                    onClick={() => props.handleAddPeople(props.ppl)}> 
                        <FontAwesomeIcon icon={faUserPlus} />
                        Hire Me
                </button> 
            </div>   
        </div>
    );
};

export default PeoplesInfo;