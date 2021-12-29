import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  googleProvider,
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";
import { signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { userActions } from "./userSlice";

function* signInWithGoogle() {
  try {
    const { user } = yield signInWithPopup(auth, googleProvider);
    yield call(signInUser, user);
  } catch (err) {
    yield put(userActions.signInFailure(err));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield signInWithEmailAndPassword(auth, email, password);
    yield call(signInUser, user);

    yield put(userActions.signInSuccess(user));
  } catch (err) {
    yield put(userActions.signInFailure(err));
  }
}

function* signInUser(user) {
  try {
    yield put(userActions.signInSuccess(user));
  } catch (err) {
    yield put(userActions.signInFailure(err));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(userActions.googleSignInStart().type, signInWithGoogle);
}

function* onEmailSignInStart() {
  yield takeLatest(userActions.emailSignInStart().type, signInWithEmail);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
