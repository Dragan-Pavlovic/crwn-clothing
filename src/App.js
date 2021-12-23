import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";

function App() {
  console.log("App rendered");
  const [user, setUser] = useState(null);

  //

  useEffect(() => {
    console.log("App-useEffect run");

    let unsubscribeUserSnaphot;

    let unsubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      //
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        unsubscribeUserSnaphot = userRef.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setUser(null);
      }
    });

    //

    return () => {
      unsubscribeAuth();
      unsubscribeUserSnaphot();
    };
  }, []);

  return (
    <>
      <Header user={user} />
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
