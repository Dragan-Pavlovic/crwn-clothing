import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import { auth } from "./firebase/firebase.utils";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";

function App() {
  console.log("App rendered");
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("App-useEffect");
    let unsubscribeAuth = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        console.log("user", user.displayName, user.email);
      } else {
        console.log("signed out");
      }
    });

    return () => {
      unsubscribeAuth();
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
