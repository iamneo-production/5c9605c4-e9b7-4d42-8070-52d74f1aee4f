<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Signup from './Components/Signup';
import UserHome from './Components/UserHome';
import Addvehicle from './Components/Addvehicle'
//import Home from './Components/Home'
import VehicleProfile from './Components/VehicleProfile';
//import Login from './Components/Login';
import UsersProfile from './Components/UsersProfile';
import MyBooking from './Components/MyBooking';
import MyDashboard from './Components/MyDashboard';
import Login from './Components/Login';

function App() {
  return (
    <Router >
     
      <Switch>
     
      {/* <Route path="/register" component={Signup}/> */}
      
      <Route path="/user/home" component={UserHome} />
      <Route path="/user/dashboard" component={MyDashboard} />
      <Route path="/user/booking" component={MyBooking} />
      <Route path="/admin/addvehicle" component={Addvehicle} />
      <Route path="/admin/vehicleprofile" component={VehicleProfile} />
     
      <Route path="/admin/userprofile" component={UsersProfile}/>
      <Route path="/user/login" component={Login} />
      
      </Switch>
    </Router>
>>>>>>> 702ffb002da529a6f96c5288333cf66ffacc3d92
  );
}

export default App;
