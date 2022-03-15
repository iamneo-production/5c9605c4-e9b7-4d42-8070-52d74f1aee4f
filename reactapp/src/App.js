import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
//import Signup from './Components/Signup';
import UserHome from './Components/UserHome';
import Addvehicle from './Components/Addvehicle'
//import Home from './Components/Home'
import VehicleProfile from './Components/VehicleProfile';
//import Login from './Components/Login';
import UsersProfile from './Components/UsersProfile';
import MyBooking from './Components/MyBooking';
import MyDashboard from './Components/MyDashboard';
=======
import Login from './Components/Login';

>>>>>>> 0495fddbebfd5022ba5690f155b5e99578e9b481
function App() {
  return (
    <Router >
     
      <Switch>
<<<<<<< HEAD
     
      {/* <Route path="/register" component={Signup}/> */}
      
      <Route path="/user/home" component={UserHome} />
      <Route path="/user/dashboard" component={MyDashboard} />
      <Route path="/user/booking" component={MyBooking} />
      <Route path="/admin/addvehicle" component={Addvehicle} />
      <Route path="/admin/vehicleprofile" component={VehicleProfile} />
     
      <Route path="/admin/userprofile" component={UsersProfile}/>
=======
      <Route path="/user/login" component={Login} />
>>>>>>> 0495fddbebfd5022ba5690f155b5e99578e9b481
      
      </Switch>
    </Router>
  );
}

export default App;
