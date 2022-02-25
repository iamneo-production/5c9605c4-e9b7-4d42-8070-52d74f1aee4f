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
function App() {
  return (
    <Router >
     
      <Switch>
      <Route path="/home" component={Home} />
      <Route path="/register" component={Signup}/>
      <Route path="/user/login" component={Login} />
      <Route path="/user/dashboard" component={UserHome} />
      <Route path="/admin/addvehicle" component={Addvehicle} />
      <Route path="/admin/vehicleprofile" component={VehicleProfile} />
      <Route path="/admin/editvehicle" component={Editvehicle} />
      <Route path="/admin/userprofile" component={UsersProfile}/>
      </Switch>
    </Router>
  );
}

export default App;
