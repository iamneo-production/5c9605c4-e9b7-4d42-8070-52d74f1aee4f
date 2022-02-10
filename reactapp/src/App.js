import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
function App() {
  return (
    <Router >
      <Switch>
        
        <Route path="/user/dashboard" component={Dashboard} />
        <Route path="/user/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
