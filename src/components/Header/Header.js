import React from 'react';
import cover from '../../images/coverPic.jfif';
import './Header.css';

const Header = () => {
    return (
        <div className= "header">           
            <div>
                <img src={cover} alt=""/>
            </div>
            <div>    
                    <h1>Searching For Job Near FujiSan?</h1>
            </div>         
            
        </div>
    );
};

export default Header;