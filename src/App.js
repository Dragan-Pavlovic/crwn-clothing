import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Checkout from "./pages/Checkout/Checkout";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";
import { selectUser } from "./Store/user-slice/userSelectors";
import { userActions } from "./Store/user-slice/userSlice";

function App() {
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();

  console.log(currentUser);
  console.log("app rerendered");

  useEffect(() => {
    dispatch(userActions.checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />

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
