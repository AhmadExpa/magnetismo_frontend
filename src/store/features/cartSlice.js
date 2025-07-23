import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {
        state.products = state.products.filter((p) => p.id !== action.payload.id);
      }
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
