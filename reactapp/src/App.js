import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from './Components/Signup';
import UserHome from './Components/UserHome';
import Addvehicle from './Components/Addvehicle'
function App() {
  return (
    <Router >
     
      <Switch>
      <Route path="/user/dashboard" component={UserHome} />
      <Route path="/admin/addvehicle" component={Addvehicle} />
      <Route path="/Register" component={Signup}/>
      </Switch>
    </Router>
  );
}

export default App;
