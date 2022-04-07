import'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './Components/Login'
import Navigationbar from './Components/Navigationbar';
import Form from './Components/Form';
import Booking from './Components/Booking';
import Homepage from './Components/Homepage';
import EditVehicle from './Components/EditVehicle';
import Footer from './Components/Footer';
import VehicleProfile from './Components/VehicleProfile';
function App() {
  return (
    <Router >
      <Switch>
      
      
    <Route path="/user/login" component={Login} />
    <Route path="/user/homepage" component={Homepage} />
    <Route path="/user/booking" component={Booking} /> 
    <Route path="/user/form" component={Form} />
    <Route path="/user/navigation" component={Navigationbar} />
    <Route path="/user/editvehicle" component={EditVehicle} />
    <Route path="/user/footer" component={Footer} />
    <Route path="/user/vehicleprofile" component={VehicleProfile} />
    
     
      </Switch>
    </Router>
  );
}

export default App;