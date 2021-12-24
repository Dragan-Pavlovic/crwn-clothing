import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHidden: true,
  cartItems: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartHidden(state) {
      state.isHidden = !state.isHidden;
    },

    addItemToCart(state, action) {
      const { id, price } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);

      if (item) {
        ++item.quantity;
      } else {
        const newItem = { ...action.payload, quantity: 1 };

        state.cartItems.push(newItem);
      }

      state.total += price;
      ++state.quantity;
    },
  },
});

const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export { cartActions, cartReducer };
