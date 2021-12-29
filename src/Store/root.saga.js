import { all, call } from "redux-saga/effects";
import { fetchCollectionsStartsSaga } from "./collections-slice/collections.sagas";
import { userSagas } from "./user-slice/user.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStartsSaga), call(userSagas)]);
}
