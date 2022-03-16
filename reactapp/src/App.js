import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from './Components/Signup';
//import UsersProfile from './Components/UsersProfile';
function App() {
  return (
    <Router >
     
      <Switch>
      
      <Route path="/register" component={Signup}/>
      {/* <Route path="/admin/userprofile" component={UsersProfile}/> */}
      
      </Switch>
    </Router>
  );
}

export default App;