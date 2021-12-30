//sagas
import rootSaga from "./root.saga";

import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user-slice/userSlice";
import { cartReducer } from "./cart-slice/cartSlice";
import { directoryReducer } from "./directory-slice/directorySlice";
import { collecionsReducer } from "./collections-slice/collectionsSlice";
import createSagaMiddleware from "@redux-saga/core";

//redux persist
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

// import { persistStore, persistReducer } from "redux-persist";
import {
  // FLUSH,
  // PAUSE,
  // PERSIST,
  persistReducer,
  persistStore,
  // PURGE,
  // REGISTER,
  // REHYDRATE,
} from "redux-persist";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  collections: collecionsReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user", "cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});
//  {
//         ignoredActions: [
//           FLUSH,
//           REHYDRATE,
//           PAUSE,
//           PERSIST,
//           PURGE,
//           REGISTER,
//           "user/signInSuccess",
//           "user/signInFailure",
//         ],
//       },
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
