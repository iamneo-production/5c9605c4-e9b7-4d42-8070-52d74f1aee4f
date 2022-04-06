import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Components/Login';
import UserReviews from './Components/UserReviews';

function App() {
  return (
    <Router >
     
      <Switch>
      <Route path="/user/login" component={Login} />
      <ProtectedRoute path="/user/review" component={UserReviews} />

      
      </Switch>
    </Router>
  );
}

export default App;
