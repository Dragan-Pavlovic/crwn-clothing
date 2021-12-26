import { createSelector } from "@reduxjs/toolkit";
import memoize from "lodash.memoize";
export const selectCollectons = (state) => state.collection;

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

export const selectCollecton = memoize((collectionUrlParam) =>
  createSelector([selectCollectons], (shop) => {
    return shop.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    );
  })
);
