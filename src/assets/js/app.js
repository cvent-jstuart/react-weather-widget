import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

import Layout from "./routes/Layout/Layout";

const appRoot = document.getElementById("app-root");

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  appRoot
);
