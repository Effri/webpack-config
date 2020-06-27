/** @format */
import React from "react";
import ReactDOM, { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { reducers } from "../js/redusers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

render(<Provider store={store}></Provider>, document.getElementById("root"));
