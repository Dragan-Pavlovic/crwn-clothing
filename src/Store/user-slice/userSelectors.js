import { createSelector } from "@reduxjs/toolkit";

const currentUser = (state) => state.user;

export const selectUser = createSelector(currentUser, (user) => {
  console.log("user selector run");
  return user.currentUser;
});
