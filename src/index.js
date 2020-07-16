import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DialogPage from './DialogPage/DialogPage';

ReactDOM.render(
  <React.StrictMode>
    <DialogPage login="alex" token="12345515"/>
  </React.StrictMode>,
  document.getElementById('root')
);
