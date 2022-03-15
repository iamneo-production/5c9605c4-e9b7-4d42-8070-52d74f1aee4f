import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from './Components/Signup';
import UserHome from './Components/UserHome';
import Addvehicle from './Components/Addvehicle'
import Home from './Components/Home'
import VehicleProfile from './Components/VehicleProfile';
import Editvehicle from './Components/EditVehicle';
import Login from './Components/Login';
import UsersProfile from './Components/UsersProfile';
import MyBooking from './Components/MyBooking';
import MyDashboard from './Components/MyDashboard';
function App() {
  return (
    <Router >
     
      <Switch>
      <Route path="/home" component={Home} />
      <Route path="/register" component={Signup}/>
      <Route path="/user/login" component={Login} />
      <Route path="/user/home" component={UserHome} />
      <Route path="/user/dashboard" component={MyDashboard} />
      <Route path="/user/booking" component={MyBooking} />
      <Route path="/admin/addvehicle" component={Addvehicle} />
      <Route path="/admin/vehicleprofile" component={VehicleProfile} />
      <Route path="/admin/editvehicle" component={Editvehicle} />
      <Route path="/admin/userprofile" component={UsersProfile}/>
      
      </Switch>
    </Router>
  );
}

export default App;
