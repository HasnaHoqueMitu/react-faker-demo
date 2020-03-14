import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalprice= cart.reduce((total, prd) => total + prd.salary, 0)
    const totalName= cart.reduce((totalNmae, prd) => totalNmae + prd.name, 0)
    return (
        <div className="cartBox">
            <h4>Hired Employee Info</h4>
            <p>Total Hired People: {cart.length}</p>
            <p>Total Cost for Employee Salary: {totalprice}</p>
            <div>
                <h6>Hired Employees:</h6>
                <p>Names: </p>
            </div>
        </div>
    );
};

export default Cart;