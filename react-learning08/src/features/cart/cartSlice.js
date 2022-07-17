import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from '../../cartItems';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: true
};

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
    return fetch(url).then(res => res.json());
});

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(item => {
                return item.id !== action.payload;
            })
        },
        incerement: (state, action) => {
            console.log("entering increment");
            state.cartItems = state.cartItems.map(item => {
                if(item.id === action.payload) {
                    return {... item, amount: item.amount + 1}
                }
                return item;
            });
        },
        decrement: (state, action) => {
            console.log("entering decrement");
            state.cartItems = state.cartItems.map(item => {
                if(item.id === action.payload) {
                    return {... item, amount: item.amount - 1}
                }
                return item;
            });
        },
        calculateAmountTotal: (state, action) => {
            console.log("entering calculate total");
            let amount = 0;
            let total = 0;
            state.cartItems.map(item => {
                amount += item.amount;
                total += (item.amount * item.price);
            })
            state.amount = amount;
            state.total = total;
        }
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;            
        },
        [getCartItems.fulfilled]: (state, action) => {    
            console.log(action.payload);            
            state.cartItems = action.payload;        
            state.isLoading = false;
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false;            
        }
    }
});


export const { clearCart, removeItem, incerement, decrement, calculateAmountTotal } = cartSlice.actions;

export default cartSlice.reducer; 