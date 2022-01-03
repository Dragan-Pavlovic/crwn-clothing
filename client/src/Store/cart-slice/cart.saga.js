import { call, all, takeLatest,takeEvery put } from "redux-saga/effects";
import { userActions } from "../user-slice/userSlice";
import { cartActions } from "./cartSlice";

function* clearCartOnSignOutSuccess() {
  yield put(cartActions.clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(
    userActions.signOutSuccess().type,
    clearCartOnSignOutSuccess
  );
}
function* onAddToCart (){
  yield takeEvery(cartActions.addItemToCart().type,)
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
  
}
