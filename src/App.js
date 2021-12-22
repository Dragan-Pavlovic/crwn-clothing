import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/shop/shop";

function App() {
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
        </Switch>
      </main>
    </>
  );
}

export default App;
