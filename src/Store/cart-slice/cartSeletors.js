import { createSelector } from "@reduxjs/toolkit";

// const selectCart = (state) => state.cart;

export const selectIsDropdownHidden = (state) => state.cart.isHidden;

export const selectCartItems = createSelector(
  (state) => state.cart.cartItems,
  (cartItems) => {
    return cartItems;
  }
);

export const selectQuantity = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce((acc, item) => acc + item.quantity, 0);
});

export const selectCartTotalPrice = createSelector(
  selectCartItems,
  (cartItems) => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
);
