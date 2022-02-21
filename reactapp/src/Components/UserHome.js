import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDashboard from './UserDashboard';

function UserHome() {
    useEffect(() => {
        document.title = "TravelYaari  ||  User";
      },[]);

  return <div>
      <UserDashboard/>
      
  </div>


}

export default UserHome;
