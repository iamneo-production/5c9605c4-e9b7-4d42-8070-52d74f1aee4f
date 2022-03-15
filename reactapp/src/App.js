import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Components/Login';

function App() {
  return (
    <Router >
     
      <Switch>
      <Route path="/user/login" component={Login} />
      
      </Switch>
    </Router>
  );
}

export default App;
