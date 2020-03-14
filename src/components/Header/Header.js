import React from 'react';
import cover from '../../images/coverPic.jfif';
import './Header.css';

const Header = () => {
    return (
        <div>           
            <div className="up">
                <nav>
                    <a href="">Remote Job</a>
                    <a href="">Part Time</a>
                    <a href="">Full Time</a>
                </nav>
            </div>
            <div className= "center">    
                    <h1>Career Cross Limited</h1>
            </div>         
            
        </div>
    );
};

export default Header;