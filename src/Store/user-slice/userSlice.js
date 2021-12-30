import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },

    signInSuccess(state, { payload }) {
      state.currentUser = payload;
      state.error = "";
    },
    signInFailure(state, { err }) {
      state.error = err;
    },

    emailSignInStart() {},
    facebookSignInStart() {},
    googleSignInStart() {},
    checkUserSession() {},
    signOutStart() {},
    signOutSuccess(state) {
      state.currentUser = null;
      state.error = null;
    },
    signOutFailure(state, { payload }) {
      state.error = payload;
    },
    signUpStart() {},
    signUpSuccess(state, { user, additionalData }) {
      state.currentUser = user;
    },
    signUpFailure(state, { payload }) {
      state.error = payload;
    },
  },
});

const userReducer = userSlice.reducer;
const userActions = userSlice.actions;
export { userReducer, userActions };
