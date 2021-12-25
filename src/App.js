import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";
import { cartActions } from "./Store/cartSlice";
import { userActions } from "./Store/userSlice";

function App() {
  const isHidden = useSelector((state) => state.cart.isHidden);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  //
  console.log("App Run");

  useEffect(() => {
    const keyPressHandler = (e) => {
      if (e.key?.toLowerCase() === "escape" && isHidden === false) {
        dispatch(cartActions.toggleCartHidden());
      }
    };
    document.addEventListener("keydown", keyPressHandler, false);
    return () => {
      document.removeEventListener("keydown", keyPressHandler, false);
    };
  }, [dispatch, isHidden]);

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
    <div>
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
            {currentUser && <Redirect to="/" />}
            {!currentUser && <SignInAndSignUp />}
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
