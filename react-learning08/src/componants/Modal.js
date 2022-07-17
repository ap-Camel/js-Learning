import React from "react";
import {useDispatch, useSelector} from 'react-redux';

import {clearCart} from '../features/cart/cartSlice';
import { closeModal } from '../features/modal/modalSlice';

function Modal() {

    const modal = useSelector(state => state.modal);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return(
        <aside className="modal-container">
            <div className="modal">
                <h4>remove all items from the shopping cart?</h4>
                <div className="btn-container">
                <button type="button" className="btn confirm-btn" onClick={() => {
                    dispatch(clearCart());
                    dispatch(closeModal());
                }} >
                    confirm
                </button>
                <button type="button" className="btn clear-btn" onClick={() => {dispatch(closeModal());}}>
                    cancel
                </button>
            </div>
            </div>              
        </aside>
    );
}


export default Modal;