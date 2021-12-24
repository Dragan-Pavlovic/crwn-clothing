import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";
import { userActions } from "./Store/userSlice";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  //

  console.log(currentUser);

  useEffect(() => {
    let unsubscribeUserSnaphot;

    let unsubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      //
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        unsubscribeUserSnaphot = userRef.onSnapshot((snapShot) => {
          dispatch(
            userActions.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      } else {
        dispatch(userActions.setCurrentUser(null));
      }
    });

    //

    return () => {
      unsubscribeAuth();
      unsubscribeUserSnaphot();
    };
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/shop" exact>
            <Shop />
          </Route>

          <Route path="/signin">
            <SignInAndSignUp />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
