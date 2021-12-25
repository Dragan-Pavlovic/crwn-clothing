import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHidden: true,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartHidden(state) {
      state.isHidden = !state.isHidden;
    },

    addItemToCart(state, action) {
      const { id } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);

      if (item) {
        ++item.quantity;
      } else {
        const newItem = { ...action.payload, quantity: 1 };

        state.cartItems.push(newItem);
      }
    },
  },
});

const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export { cartActions, cartReducer };
