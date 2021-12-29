import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoading: false,
  true: "",
  false: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },

    googleSignInStart(state) {
      state.isLoading = true;
    },
    signInSuccess(state, { payload }) {
      state.currentUser = payload;
      state.error = "";
      state.isLoading = false;
    },
    signInFailure(state, { err }) {
      state.error = err;
      state.isLoading = false;
    },

    emailSignInStart(state) {
      state.isLoading = true;
      state.true = Date.now();
    },

    facebookSignInStart() {},
  },
});

const userReducer = userSlice.reducer;
const userActions = userSlice.actions;
export { userReducer, userActions };
