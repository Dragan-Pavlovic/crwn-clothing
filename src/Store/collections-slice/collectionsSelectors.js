import { createSelector } from "@reduxjs/toolkit";
import memoize from "lodash.memoize";

export function selectCollectonsSlice(state) {
  return state.collections;
}

export const selectCollections = createSelector(
  [selectCollectonsSlice],
  (collectionsSlice) => {
    console.log("selectCollections run");
    return collectionsSlice.collections;
  }
);

export const selectCollectionIsLoading = createSelector(
  [selectCollectonsSlice],
  (collections) => {
    console.log("selectIsFetching run");
    return collections.isFetching;
  }
);

export const selectCollecton = memoize((collectionUrlParam) =>
  createSelector([selectCollectonsSlice], (collections) => {
    console.log("select collection run");
    return collections.collections
      ? collections.collections[collectionUrlParam]
      : null;
  })
);
