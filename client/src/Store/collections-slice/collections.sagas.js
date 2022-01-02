import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { collectionsActions } from "./collectionsSlice";

function* fetchCollectionsAsyncSaga() {
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

function* fetchCollectionsStartsSaga() {
  yield takeLatest(
    collectionsActions.fetchCollectionsStarts().type,
    fetchCollectionsAsyncSaga
  );
}

export function* collectionSagas() {
  yield all([call(fetchCollectionsStartsSaga)]);
}
