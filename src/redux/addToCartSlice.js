// addToCartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartCount: 0 // Changed from totalCount to cartCount
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
        // Update cart count after adding the item
        state.cartCount = state.cartItems.reduce((acc, item) => acc + item.quantity, 0); 
        localStorage.setItem("cartCount", state.cartCount);
      },
      removeItemFromCart(state, action) {
        const idToRemove = action.payload.id;
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== idToRemove
        );
        // Update cart count after removing the item
        state.cartCount = state.cartItems.reduce((acc, item) => acc + item.quantity, 0);
        localStorage.setItem("cartCount", state.cartCount);
      },
      clearCart(state) {
        state.cartItems = [];
        // Update cart count after clearing the cart
        state.cartCount = 0; // Changed from totalCount to cartCount
        localStorage.setItem("cartCount", 0);
      },
    },
  });
  

export const { addItemToCart, removeItemFromCart, clearCart } =
  addToCartSlice.actions;

export default addToCartSlice.reducer;
