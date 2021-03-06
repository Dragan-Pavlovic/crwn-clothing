import { createSelector } from "@reduxjs/toolkit";

const selectUserSlice = (state) => {
  return state.user;
};

export const selectUser = createSelector(selectUserSlice, (userSlice) => {
  return userSlice.currentUser;
});
