
import React from 'react';
import { Navbar, Nav,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/dashboard.css'

function UserDashboard() {


  return <div><Navbar   >

    <Navbar.Brand href="/home" style={{ color: 'cyan',opacity:'0.9' }}>Travel Yaari</Navbar.Brand>
    <Container>
      <Nav className="me-auto" >
        <Nav.Link href="/user/home" style={{ color: 'white', marginRight: '35px' }}>Home</Nav.Link>
        <Nav.Link href="/user/dashboard" style={{ color: 'white', marginRight: '35px' }}>Dashboard</Nav.Link>
        <Nav.Link href="/user/booking" style={{ color: 'white', marginRight: '35px' }}>My Booking</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/user/login" style={{ color: 'white' }}>Logout</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

  </div>


}

export default UserDashboard;
