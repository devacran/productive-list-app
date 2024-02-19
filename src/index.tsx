import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
const app = document.getElementById("app");
import App from "./App";
import { Provider } from "react-redux";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { createStore, compose } from "redux";
import reducer from "./reducer";
require("./styles/main.scss");

const client = new ApolloClient({
  uri: "https://productive-list-server.vercel.app/api",
  cache: new InMemoryCache(),
});

const composeEnhancers =
  (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose; //To debugg state with redux chrome extension

import initialState from "./initialState";
const store = createStore(reducer, initialState as any, composeEnhancers());
const root = createRoot(app);

root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
);
