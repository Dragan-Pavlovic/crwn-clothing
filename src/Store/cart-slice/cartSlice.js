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

    removeItem(state, { payload: id }) {
      const itemId = id;
      const cartItems = state.cartItems;
      const itemIndex = cartItems.findIndex((item) => +item.id === +itemId);
      if (itemIndex >= 0) cartItems.splice(itemIndex, 1);
    },

    decreaseItemQuantity(state, { payload: id }) {
      const itemId = id;
      const cartItems = state.cartItems;
      const itemIndex = cartItems.findIndex((item) => +item.id === +itemId);

      if (itemIndex >= 0) {
        const quantity = cartItems[itemIndex].quantity;
        if (quantity > 1) {
          --cartItems[itemIndex].quantity;
        } else {
          cartItems.splice(itemIndex, 1);
        }
      }
    },
  },
});

const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export { cartActions, cartReducer };
