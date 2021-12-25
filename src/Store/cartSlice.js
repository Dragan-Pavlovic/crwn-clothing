import { createSlice, createSelector } from "@reduxjs/toolkit";

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

const selectCart = (state) => state.cart.cartItems;

export const selectCartItems = createSelector([selectCart], (cart) => {
  console.log("cartItems selector run");
  return cart;
});

export const selectQuantity = createSelector([selectCartItems], (cartItems) => {
  console.log("quantity selector run");
  return cartItems.reduce((acc, item) => acc + item.quantity, 0);
});

export { cartActions, cartReducer };
