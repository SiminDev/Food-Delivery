import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
