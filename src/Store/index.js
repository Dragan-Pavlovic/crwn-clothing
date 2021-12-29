//sagas
import rootSaga from "./root.saga";

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
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
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
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
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          "user/signInSuccess",
        ],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// const input = `"Kod proizvoda-SKU","Naziv proizvoda","Cena proizvoda","Kategorija","Proizvodjač","Opis proizvoda","Meta opis","Zalihe","Poslednji par (dodatno polje)","Besplatna Dostava (dodatno polje)","Poklon kupon (dodatno polje)","Poklon kupon - vrednost (dodatno polje)","Vrsta gazista (atribut proizvoda)","Materijal (atribut proizvoda)","Visina pete (atribut proizvoda)","Boja (atribut proizvoda)","Tip (atribut proizvoda)","Ključne reči proizvoda (tagovi)","URL glavne slike","URL dodatne slike 1","URL dodatne slike 2","URL dodatne slike 3"
// "AIS.905CR","Kožne muške cipele 905CR crne","5999","MUŠKA OBUĆA>CIPELE","Ostalo","Novo! Cipele 905cr. Prirodna koža.",,"0","NE","NE","NE","","","Koža","","Crna","Plitke","muške cipele sabac;muške cipele online;muške cipele online prodaja;muške cipele obuca kalista;obuca sabac;muške kožne cipele;","http://s.cdnmpro.com/582101898/content/Slike/Cipele%20905CR_1.jpg","http://s.cdnmpro.com/582101898/content/Slike/Cipele%20905CR_2.jpg","http://s.cdnmpro.com/582101898/content/Slike/Cipele%20905CR_3.jpg",`;

// const items = input.replaceAll(`"`, "").split("\n");
// console.log(items);
// const columnsTitles = items[0].split(",");
// const item = items[1].split(",");

// let json = {};
// columnsTitles.forEach((title, i) => {
//   console.log(title);
//   console.log(item[i]);

//   json[title] = item[i];
// });

// console.log(json);
