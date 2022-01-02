import { all, call } from "redux-saga/effects";
import { cartSagas } from "./cart-slice/cart.saga";
import { collectionSagas } from "./collections-slice/collections.sagas";
import { userSagas } from "./user-slice/user.sagas";

export default function* rootSaga() {
  yield all([call(collectionSagas), call(userSagas), call(cartSagas)]);
}
