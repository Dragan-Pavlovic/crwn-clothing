import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userReducer } from "./user-slice/userSlice";
import { cartReducer } from "./cart-slice/cartSlice";
import { directoryReducer } from "./directory-slice/directorySlice";
import { collecionsReducer } from "./collections-slice/collectionsSlice";

//redux persist
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

// import { persistStore, persistReducer } from "redux-persist";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

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
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
