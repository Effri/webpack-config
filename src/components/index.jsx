/** @format */
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App/app";
import { popup } from "../js/popups";

ReactDOM.render(<App />, document.querySelector("#Expamle"), () => {
  popup();
});
