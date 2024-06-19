const { configureStore } = require("@reduxjs/toolkit");

import addToCartReducer from './addToCartSlice';

export const store = configureStore({
    reducer: {
        
        cart: addToCartReducer,
      },
})