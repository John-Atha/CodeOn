import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import ReactNotifications from "react-notifications-component";
import App from './Components/App';

ReactDOM.render(
  <React.StrictMode>
    <ReactNotifications />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
