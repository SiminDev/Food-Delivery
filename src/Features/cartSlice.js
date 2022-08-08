import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.cartItems[existingIndex].quantity += 1;
        state.cartTotalQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
