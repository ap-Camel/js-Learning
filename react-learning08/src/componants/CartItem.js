import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { incerement, removeItem, decrement } from '../features/cart/cartSlice';
import { ChevronDown, ChevronUp } from '../icons';
import { openModal } from '../features/modal/modalSlice';



function CartItem(prop) {


    const dispatch = useDispatch();

    return(
        <article className='cart-item'>
            <img src={prop.data.img} alt={prop.data.title} />
            <div>
                <h4>{prop.data.title}</h4>
                <h4>${prop.data.price}</h4>
                <button className='remove-btn' onClick={() => {dispatch(removeItem(prop.data.id))}} >remove</button>
            </div>
            <div>
                <button className='amount-btn' onClick={() => {dispatch(incerement(prop.data.id))}}>
                    <ChevronUp />
                </button>
                <p className='amount' >{prop.data.amount}</p>
                <button className='amount-btn' onClick={() => prop.data.amount <= 1 ? dispatch(removeItem(prop.data.id)) : dispatch(decrement(prop.data.id))} >
                    <ChevronDown />
                </button>
            </div>
        </article>
    );
}


export default CartItem;