import { createSlice } from '@reduxjs/toolkit';

const wishListSlice = createSlice({
  name: 'wishList',
  initialState: {
    wishProducts: [],
    quantity: 0,
  },
  reducers: {
    clearList: (state) => {
      state.wishProducts = [];
    },
    add: (state, action) => {
      state.wishProducts.push(action.payload);
      state.quantity += 1;
    },
    remove: (state, action) => {
      state.wishProducts = state.wishProducts.filter(
        (item) => item._id !== action.payload
      );

      state.quantity -= 1;
    },
  },
});

export const { clearList, add, remove } = wishListSlice.actions;
export default wishListSlice.reducer;
