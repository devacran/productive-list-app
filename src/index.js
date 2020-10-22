import React from "react";
import ReactDOM from "react-dom";
const app = document.getElementById("app");
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import styles from "./styles/main.scss";
const initialState = {};
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
