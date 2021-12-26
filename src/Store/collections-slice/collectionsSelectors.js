import { createSelector } from "@reduxjs/toolkit";
import memoize from "lodash.memoize";

export const selectCollectons = (state) => state?.collections;

export const selectCollecton = memoize((collectionUrlParam) =>
  createSelector([selectCollectons], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);
