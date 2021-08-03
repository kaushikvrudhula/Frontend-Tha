import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./store";
import { Provider } from "react";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);