import React from 'react';
import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';

function Navbar() {

    const cart = useSelector(store => {
        return store.cart;
    });

    return(
        <nav>
            <div className="nav-center">
                <h3>hello from the navbar</h3>
                <div className="nav-container">
                    <CartIcon />
                    <div className="amount-container">
                        <p className='total-amount'>{cart.amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;