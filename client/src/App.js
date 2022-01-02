import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import "./App.css";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import Header from "./components/header/Header";
import LoadingSpinner from "./components/loading-spinner/LoadingSpinner";
import { selectUser } from "./Store/user-slice/userSelectors";
import { userActions } from "./Store/user-slice/userSlice";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Shop = lazy(() => import("./pages/shop/shop"));
const SignInAndSignUp = lazy(() =>
  import("./pages/sign-in-and-sign-up/SignInAndSignUp")
);
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));

function App() {
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <ErrorBoundary>
        <Header />

        <main>
          <Switch>
            <Suspense fallback={<LoadingSpinner />}>
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
            </Suspense>
            <Route path="*">
              <h1 className="no-page">No Page found</h1>
            </Route>
          </Switch>
        </main>
      </ErrorBoundary>
    </div>
  );
}

export default App;
