
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/dashboard.css'
import {useHistory} from 'react-router-dom'

function AdminDashboard() {

const history= useHistory();
    return <div><Navbar id='adminnav' >

        <Navbar.Brand href="/home" style={{ color: 'white' }}>Travel Yaari</Navbar.Brand>
        <Container>
            <Nav className="me-auto" >
            <Nav.Item>   <Nav.Link href="/admin/addvehicle" style={{ color: 'white', marginRight: '35px',opacity:'1'}}>Add vehicle</Nav.Link></Nav.Item>
                <Nav.Link href="/admin/vehicleprofile" style={{ color: 'white', marginRight: '35px' }}>Vehicle profile</Nav.Link>
                <Nav.Link href="/admin/userprofile" style={{ color: 'white', marginRight: '35px' }}>User Profile</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="/user/login" style={{ color: 'white'  }}  onClick={() => {
          localStorage.clear();
          history.push("/user/login")
        }}>Logout</Nav.Link>
            </Nav>
        </Container>
    </Navbar>

    </div>


}

export default AdminDashboard;
