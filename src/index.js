import 'fontsource-roboto';
import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <>
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width"
    />
    <Router>
      <App />
    </Router>
  </>,
  document.getElementById("root")
);
