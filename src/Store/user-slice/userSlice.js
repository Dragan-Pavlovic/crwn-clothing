import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentUser: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

const userReducer = userSlice.reducer;
const userActions = userSlice.actions;

export { userReducer, userActions };
