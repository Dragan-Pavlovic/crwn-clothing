import { createSelector } from "@reduxjs/toolkit";
import memoize from "lodash.memoize";

export const selectCollectons = (state) => state?.collections;

export const selectCollecton = (collectionUrlParam) =>
  createSelector([selectCollectons], (collections) => {
    console.log("select collection run");
    return collections ? collections[collectionUrlParam] : null;
  });
