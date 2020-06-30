/** @format */
import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { reducers } from "../js/redusers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root"),
);
