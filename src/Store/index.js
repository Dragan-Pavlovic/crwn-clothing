import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./user-slice/userSlice";
import { cartReducer } from "./cart-slice/cartSlice";

export const store = configureStore({
  reducer: { user: userReducer, cart: cartReducer },
});
