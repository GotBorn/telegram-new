import React from "react";
import ReactDOM from "react-dom";
import DialogPage from "./DialogPage/DialogPage"
import App from "./App"
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <DialogPage login="alex" token="12345515"/>
  </React.StrictMode>,
  document.getElementById('root')
);
/*
<App/>*/

/*<DialogPage login="alex" token="12345515"/>*/