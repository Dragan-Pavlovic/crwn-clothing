import { createSlice } from "@reduxjs/toolkit";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";

const collectionsSlice = createSlice({
  name: "collection",
  initialState: {
    collections: null,
    isFetching: true,
    errorMessage: undefined,
  },
  reducers: {
    updateCollections(_, action) {
      return { ...action.payload };
    },

    fetchCollectionsStarts(state) {
      state.isFetching = true;
    },

    fetchCollectionsSuccess(state, { payload }) {
      state.collections = payload;
      state.isFetching = false;
    },

    fetchCollectionsFilure(state, { payload }) {
      state.isFetching = false;
      state.errorMessage = payload;
    },
  },
});

export const collecionsReducer = collectionsSlice.reducer;
const collectionsActions = collectionsSlice.actions;
collectionsActions.fetchCollectionStartsAsync = () => async (dispatch) => {
  try {
    const collectionRef = firestore.collection("collections");
    dispatch(collectionsActions.fetchCollectionsStarts());

    const snapShot = await collectionRef.get();
    const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
    dispatch(collectionsActions.fetchCollectionsSuccess(collectionsMap));
  } catch (err) {
    dispatch(collectionsActions.fetchCollectionsFilure(err.message));
  }
};

export { collectionsActions };
