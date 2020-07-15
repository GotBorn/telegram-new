import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DialogPage from './DialogPage';

ReactDOM.render(
  <React.StrictMode>
    <DialogPage login="alex" />
  </React.StrictMode>,
  document.getElementById('root')
);
