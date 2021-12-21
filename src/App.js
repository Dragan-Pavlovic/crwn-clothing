import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
