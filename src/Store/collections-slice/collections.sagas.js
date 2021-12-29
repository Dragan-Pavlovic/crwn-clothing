import { takeLatest, call, put } from "redux-saga/effects";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { collectionsActions } from "./collectionsSlice";

export function* fetchCollectionsAsyncSaga() {
  yield console.log("I am fired");

  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapShot
    );
    yield put(collectionsActions.fetchCollectionsSuccess(collectionsMap));
  } catch (err) {
    yield put(collectionsActions.fetchCollectionsFilure(err.message));
  }
}

export function* fetchCollectionsStartsSaga() {
  yield takeLatest(
    collectionsActions.fetchCollectionsStarts().type,
    fetchCollectionsAsyncSaga
  );
}
