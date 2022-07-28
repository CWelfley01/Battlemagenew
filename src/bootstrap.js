import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";
import AddSpell from "./authuser/add-spell";
import AddFireElement from "./authuser/add-fire";
import Navbar from "./components/NavBar";


const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
       <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/add-spell">
            <AddSpell />
          </Route>
          <Route path="/add-FireElement">
            <AddFireElement />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
