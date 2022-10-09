import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import Youtube from "./network/youtube";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App youtube={new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY)} />
);
