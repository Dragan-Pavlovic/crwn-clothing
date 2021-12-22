import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/shop/shop";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop" exact>
          <Shop />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
