import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Components/Home'

function App() {
  return (
    <Router >
     
      <Switch>
      <Route path="/home" component={Home} />
      
      
      </Switch>
    </Router>
  );
}

export default App;