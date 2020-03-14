import React from 'react';
import cart from './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalprice= cart.reduce((total, prd) => total + prd.price, 0)
    return (
        <div className="cartBox">
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>total Cost for Employee Salary: {totalprice}</p>
        </div>
    );
};

export default Cart;