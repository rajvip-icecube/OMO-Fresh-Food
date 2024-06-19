
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartCount: 0 
};

const addToCartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addItemToCart(state, action) {
        console.log(action)
        console.log("Payload:", action.payload);
        const newItem = action.payload;
        const existingItem = state.cartItems.find(item => item.id === newItem.id);
        if (existingItem) {
          existingItem.quantity += newItem.quantity;
        } else {
          state.cartItems.push(newItem);
        }
        state.cartCount = state.cartItems.reduce((acc, item) => acc + item.quantity, 0); 
        localStorage.setItem("cartCount", state.cartCount);
      },
      removeItemFromCart(state, action) {
        const idToRemove = action.payload.id;
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== idToRemove
        );
        state.cartCount = state.cartItems.reduce((acc, item) => acc + item.quantity, 0);
        localStorage.setItem("cartCount", state.cartCount);
      },
      clearCart(state) {
        state.cartItems = [];
        state.cartCount = 0;
        localStorage.setItem("cartCount", 0);
      },
    },
  });
  

export const { addItemToCart, removeItemFromCart, clearCart } =
  addToCartSlice.actions;

export default addToCartSlice.reducer;
