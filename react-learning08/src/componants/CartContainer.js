import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from './CartItem';
import { clearCart } from '../features/cart/cartSlice';
import { openModal, closeModal } from '../features/modal/modalSlice';


function CartContainer() {

    const cart = useSelector(store => store.cart);
    const modal = useSelector(store => store.modal);
    const dispatch = useDispatch();


    if(cart.amount < 1) {
        return(
            <section className='cart'> 
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        );
    }

    return(
        <section className='cart' >
            <header>
                <h2>your bag</h2>
            </header>
            <div>
            {cart.cartItems.map(cartItem => {
                return(
                    <CartItem key={cartItem.id} data={cartItem} />
                );
            })}
            </div>
            <footer>
                <div className='cart-total'>
                <hr />
                <h4>total <span>${cart.total.toFixed(2)}</span></h4>
                </div>
                <button type='button' className='btn clear-btn' onClick={() => {dispatch(openModal())}} >clear cart</button>
            </footer>
        </section>
    );
}


export default CartContainer;