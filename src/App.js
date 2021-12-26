import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Header from "./components/header/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import Checkout from "./pages/Checkout/Checkout";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";
import { cartActions } from "./Store/cart-slice/cartSlice";
import { userActions } from "./Store/user-slice/userSlice";

function App() {
  const isHidden = useSelector((state) => state.cart.isHidden);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();
  //

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
    const unsubscribeHistory = history.listen((e) => {
      if (!isHidden) dispatch(cartActions.toggleCartHidden());
    });

    return unsubscribeHistory;
  }, [isHidden, dispatch, history]);

  useEffect(() => {
    //subscribe to firbase Auth
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
      <h1>Dragan</h1>
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>

          <Route path="/signin">
            {currentUser && <Redirect to="/" />}
            {!currentUser && <SignInAndSignUp />}
          </Route>

          <Route exact path="/checkout">
            <Checkout />
          </Route>

          <Route path="*">
            <h1 className="no-page">No Page found</h1>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
