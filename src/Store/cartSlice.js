import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHidden: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartHidden(state) {
      state.isHidden = !state.isHidden;
    },
  },
});

const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export { cartActions, cartReducer };
