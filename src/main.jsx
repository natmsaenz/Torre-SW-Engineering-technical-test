import React from "react";
import ReactDOM from "react-dom/client";
import App from "./router/Router.jsx";
import { Link, HashRouter } from 'react-router-dom' // eslint-disable-line no-unused-vars

import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <HashRouter>
  <App />

  </HashRouter>
  </React.StrictMode>
);

export default App;
