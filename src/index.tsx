import "antd/dist/antd.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./others/index.css";
import RoleProvider from "./others/RoleContext";

ReactDOM.render(
  <React.StrictMode>
    <RoleProvider>
      <App />
    </RoleProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
