import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from './componants/Navbar';
import CartContainer from './componants/CartContainer';
import { calculateAmountTotal, getCartItems } from './features/cart/cartSlice';
import Modal from './componants/Modal';


function App() {

    const cart = useSelector(store => store.cart);
    const modal = useSelector(store => store.modal);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(calculateAmountTotal())
    }, [cart.cartItems]);

    React.useEffect(() => {
        dispatch(getCartItems());
    }, []);

    if(cart.isLoading === true) {
        return(
            <div className='loading'>
                <h1>Loading ...</h1>
            </div>
        );
    }

    return(
        <main>
            {modal.isOpen && <Modal />}
            <Navbar />
            <CartContainer />
        </main>
    );
}


export default App;