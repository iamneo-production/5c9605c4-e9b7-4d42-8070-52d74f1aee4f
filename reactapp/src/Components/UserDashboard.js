
import React from 'react';
import { useHistory } from 'react-router-dom'
import { Navbar, Nav,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/dashboard.css'

function UserDashboard() {

  let history = useHistory();
  return <div><Navbar   >

    <Navbar.Brand href="/home" style={{ color: 'white'}}>Travel Yaari</Navbar.Brand>
    <Container>
      <Nav >
        <Nav.Link href="/user/home" style={{ color: 'white', marginRight: '35px' }}>Home</Nav.Link>
        <Nav.Link href="/user/dashboard" style={{ color: 'white', marginRight: '35px' }}>Dashboard</Nav.Link>
        <Nav.Link href="/user/booking" style={{ color: 'white', marginRight: '35px' }}>My Booking</Nav.Link>
        <Nav.Link href="/user/review" style={{ color: 'white', marginRight: '35px' }}>Reviews</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/user/login" style={{ color: 'white' }} onClick={() => {
          localStorage.clear();
          history.push("/user/login")
        }}>Logout</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

  </div>


}

export default UserDashboard;
