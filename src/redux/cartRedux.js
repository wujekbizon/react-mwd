import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    clearCart: (state) => {
      state.products = [];
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },
    increase: (state, { payload }) => {
      const cartItem = state.products.find((item) => {
        return item._id === payload;
      });
      cartItem.quantity += 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.products.find((item) => {
        return item._id === payload;
      });
      cartItem.quantity -= 1;
    },
    calculateTotals: (state) => {
      let quantity = 0;
      let total = 0;
      state.products.forEach((item) => {
        quantity += item.quantity;
        total += item.price * item.quantity;
      });
      state.quantity = quantity;
      state.total = total;
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  increase,
  decrease,
  clearCart,
  calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
