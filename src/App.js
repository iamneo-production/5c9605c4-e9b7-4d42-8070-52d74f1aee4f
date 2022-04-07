import'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Login from './Components/Login'
import EditVehicle from './Components/EditVehicle'
import Review from './Components/Review'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import Payment from './Components/Payment';
function App() {
  return (
    <Router >
      <Switch>
      <Route path="/user/payment" component={Payment} />

    
      <Route path="/user/review" component={Review} />


      <Route path="/user/login" component={Login} />

      <Route path="/user/editvehicle" component={EditVehicle} />

      <Route path="/" component={Home} />



        
        {/*<Route path="/user/dashboard" component={AdminDashboard} />
        <Route path="/" component={Homepage} />*/}
        
       
        
      </Switch>
    </Router>
  );
}

export default App;