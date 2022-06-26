import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    isWishOpen: false,
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
    openWishModal: (state, action) => {
      state.isWishOpen = true;
    },
    closeWishModal: (state, action) => {
      state.isWishOpen = false;
    },
  },
});

export const { openModal, closeModal, openWishModal, closeWishModal } =
  modalSlice.actions;
export default modalSlice.reducer;
