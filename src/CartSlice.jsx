import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload; // Get the plant details from the payload
            state.items.push(newItem); // Add the plant to the items array     
        },
        removeItem: (state, action) => {
        },
        updateQuantity: (state, action) => {


        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
