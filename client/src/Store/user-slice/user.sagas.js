import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  googleProvider,
  auth,
  createUserProfileDocument,
  fbProvider,
  getCurrentUser,
} from "../../firebase/firebase.utils";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

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
  } catch (err) {
    yield put(userActions.signInFailure(err));
  }
}

function* signInwithFacebook() {
  try {
    const { user } = yield signInWithPopup(auth, fbProvider);
    yield call(signInUser, user);
  } catch (err) {
    yield put(userActions.signInFailure(err));
  }
}

function* signInUser(user, additionalData = {}) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const snapShot = yield userRef.get();
    const data = snapShot.data();
    console.log(data);
    yield put(userActions.signInSuccess({ ...user, ...data }));
  } catch (err) {
    yield put(userActions.signInFailure(err));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(userActions.signOutSuccess());
  } catch {
    yield put(userActions.signOutFailure());
  }
}
function* signUpUser({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    yield updateProfile(auth.user);
    yield put(
      userActions.signUpSuccess({ user, additionalData: { displayName } })
    );
  } catch (err) {
    yield put(userActions.signUpFailure());
  }
}
function* signInAfterSugnUpSuccess({ payload: { user, additionalData } }) {
  yield call(signInUser, user, additionalData);
}
function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield signInUser(userAuth);
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

function* onFacebookLogin() {
  yield takeLatest(userActions.facebookSignInStart().type, signInwithFacebook);
}

function* onCheckUserSession() {
  yield takeLatest(userActions.checkUserSession().type, isUserAuthenticated);
}

function* onSignoutStart() {
  yield takeLatest(userActions.signOutStart, signOut);
}

function* onSignUpSuccess() {
  yield takeLatest(userActions.signUpSuccess().type, signInAfterSugnUpSuccess);
}

function* onSignUpStart() {
  yield takeLatest(userActions.signUpStart().type, signUpUser);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onFacebookLogin),
    call(onCheckUserSession),
    call(onSignoutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
