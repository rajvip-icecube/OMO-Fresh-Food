const { configureStore } = require("@reduxjs/toolkit");
// import reducer from './slice'
import addToCartReducer from './addToCartSlice';

export const store = configureStore({
    reducer: {
        
        cart: addToCartReducer,
      },
})