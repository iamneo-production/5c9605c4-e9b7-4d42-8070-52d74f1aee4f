import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from './Components/Signup';
import UserHome from './Components/UserHome';
import Addvehicle from './Components/Addvehicle'
//import Home from './Components/Home'
import VehicleProfile from './Components/VehicleProfile';
import UsersProfile from './Components/UsersProfile';
import MyBooking from './Components/MyBooking';
import MyDashboard from './Components/MyDashboard';
import Login from './Components/Login';
import ProtectedRoute from './Components/ProtectedRoute';
import UserReviews from './Components/UserReviews';
import Home from './Components/Home';

function App() {
  return (
    <Router >
      <Switch>
        
      <Route path="/register" component={Signup}/> 
      
      <Route path="/home" component={Home}/> 
      <ProtectedRoute path="/user/home" component={UserHome} />
      <ProtectedRoute path="/user/dashboard" component={MyDashboard} />
      <ProtectedRoute path="/user/booking" component={MyBooking} />
      <ProtectedRoute path="/user/review" component={UserReviews} /> }
      <ProtectedRoute path="/admin/addvehicle" component={Addvehicle} />
      <ProtectedRoute path="/admin/vehicleprofile" component={VehicleProfile} />
      <ProtectedRoute path="/admin/userprofile" component={UsersProfile}/>
      <Route path="/user/login" component={Login} />
      
      </Switch>
    </Router>
  );
}

export default App;
