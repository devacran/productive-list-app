import React from "react";
import ReactDOM from "react-dom";
const app = document.getElementById("app");
import App from "./App";
import { Provider } from "react-redux";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { createStore, compose } from "redux";
import reducer from "./reducer";
import styles from "./styles/main.scss";

const client = new ApolloClient({
  uri: "https://productive-list-server.vercel.app/api",
  cache: new InMemoryCache()
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //To debugg state with redux chrome extension
import initialState from "./initialState";
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  app
);
