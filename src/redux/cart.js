import { createSlice } from "@reduxjs/toolkit";



const INITIAL_STATE = {
    cartCount : 0,
    cartList : []
}

const cartSlice = createSlice ({
    name: "cart",
    initialState:INITIAL_STATE,
    reducers : {
        increment: (state) => {
            state.cartCount += 1;
        },
        decrement: (state) => {
            state.cartCount -= 1
        },
        addToCart: (state) => {
            state.cartCount = 1
        }
    }
})

export const {increment, decrement, addToCart} = cartSlice.actions;

export default cartSlice.reducer;