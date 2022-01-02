import { call, all, takeLatest, put } from "redux-saga/effects";
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

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
