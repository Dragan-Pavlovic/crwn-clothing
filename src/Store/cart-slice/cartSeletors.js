import { createSelector } from "@reduxjs/toolkit";

const selectCart = (state) => state.cart;

export const selectIsDropdownHidden = (state) => state.cart.isHidden;

export const selectCartItems = createSelector(
  (state) => state.cart.cartItems,
  (cartItems) => {
    console.log("cartSelector run");
    return cartItems;
  }
);

export const selectQuantity = createSelector([selectCartItems], (cartItems) => {
  console.log("quantity selector run");
  return cartItems.reduce((acc, item) => acc + item.quantity, 0);
});

export const selectCartTotalPrice = createSelector(
  selectCartItems,
  (cartItems) => {
    console.log("cartTotal run");
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
);
