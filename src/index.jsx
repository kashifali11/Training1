import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app.jsx";
import Store from "./redux/store.jsx";
import { Provider } from "react-redux";
import ErrorBoundary from "./errorBoundary.jsx";
ReactDOM.render(
  <ErrorBoundary>
    <Provider store={Store}>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </Provider>
  </ErrorBoundary>,
  document.getElementById("root")
);
