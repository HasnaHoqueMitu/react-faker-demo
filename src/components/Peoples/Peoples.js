import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Peoples.css';
import PeoplesInfo from '../PeoplesInfo/PeoplesInfo';
import Cart from '../Cart/Cart';
import fakeJob from '../../fakeJob';
import JobInfo from '../Job/JobInfo';


const Peoples = () => {
    const first15= fakeData.slice(0,15);
    // eslint-disable-next-line
    const [peoples, setPeoples] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddPeople = (ppl) =>{
        const pplIndex = cart.indexOf(ppl);
        if (pplIndex<0){
            const newCart = [...cart, ppl];
            setCart(newCart);
        }
        else{
            alert("already hired")
        }
        //  const newCart = [...cart, ppl];
        //  setCart(newCart);
     };

     const first15Job= fakeJob.slice(0,18);
     const [jobPost, setJob] = useState(first15Job);

    return (
        <div className="peoples-container">
            <div className="peoplesInfo-container">
            <h2 className="collumHeading">Job Seekers</h2>
                    {
                         peoples.map(pl =><PeoplesInfo
                            handleAddPeople = {handleAddPeople}
                            ppl={pl}
                            ></PeoplesInfo>)
                    }
            </div>
            <div className="jobPost">
                <h2 className="collumHeading">Job Circular</h2>
                {
                    jobPost.map(job=> <JobInfo
                    jobin={job}
                    ></JobInfo>)
                }
            </div>
            <div className="cart-container">
               <Cart cart = {cart}></Cart>
            </div> 
        </div>
    );
};

export default Peoples;