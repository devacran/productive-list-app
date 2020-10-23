import React from "react";
import ReactDOM from "react-dom";
const app = document.getElementById("app");
import App from "./App";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducer from "./reducer";
import styles from "./styles/main.scss";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //To debugg state with redux chrome extension
import initialState from "./initialState";
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
