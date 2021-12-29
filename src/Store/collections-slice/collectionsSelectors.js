import { createSelector } from "@reduxjs/toolkit";
import memoize from "lodash.memoize";

export function selectCollectonsSlice(state) {
  return state.collections;
}

export const selectCollections = createSelector(
  [selectCollectonsSlice],
  (collectionsSlice) => {
    return collectionsSlice.collections;
  }
);

export const selectCollectionIsLoading = createSelector(
  [selectCollectonsSlice],
  (collections) => {
    return collections.isFetching;
  }
);

export const selectCollecton = memoize((collectionUrlParam) =>
  createSelector([selectCollectonsSlice], (collections) => {
    return collections.collections
      ? collections.collections[collectionUrlParam]
      : null;
  })
);
