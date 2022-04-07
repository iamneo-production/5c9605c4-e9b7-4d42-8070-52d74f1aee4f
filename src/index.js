import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './Components/Navigationbar.css';
import './Components/Footer.css';
import './Components/Form.css';
import './Components/Booking.css'
import './Components/Login.css'
import './Components/Homepage.css'
import './Components/EditVehicle.css'
import './Components/VehicleProfile.css';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
