import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalprice= cart.reduce((total, prd) => total + prd.salary, 0)
    const totalName= cart.reduce((totalNmae, prd) => prd.name, 0);
    return (
        <div className="cartBox">
            <h4>Hired Employee Info</h4>
            <p>Total Hired People: {cart.length}</p>
            <p>Total Cost for Employee Salary: ${totalprice}</p>
            <div>
                <h6>Hired Employees:</h6>
                <p>Just Hired: {totalName} </p>
                <h6>Hired List: </h6>
                {
                    cart.map(user => <div className="hiredList"> <img className="hiredPhoto" src={user.photo} alt=""/> <p  className='user-name'>{user.name}</p>  </div> )
                }
            </div>
        </div>
    );
};

export default Cart;