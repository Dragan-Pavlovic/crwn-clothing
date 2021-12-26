import { createSlice } from "@reduxjs/toolkit";

const collectionsSlice = createSlice({
  name: "collection",
  initialState: null,
  reducers: {
    updateCollections(state, action) {
      return { ...action.payload };
    },
  },
});

export const collecionsReducer = collectionsSlice.reducer;
export const collectionsActions = collectionsSlice.actions;
