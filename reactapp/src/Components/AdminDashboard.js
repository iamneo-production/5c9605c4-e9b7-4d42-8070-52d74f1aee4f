
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/dashboard.css'

function AdminDashboard() {


    return <div><Navbar>

        <Navbar.Brand href="/home" style={{ color: 'white' }}>Travel Yaari</Navbar.Brand>
        <Container>
            <Nav className="me-auto" >
                <Nav.Link href="/admin/addvehicle" style={{ color: 'white', marginRight: '35px' }}>Add vehicle</Nav.Link>
                <Nav.Link href="/admin/vehicleprofile" style={{ color: 'white', marginRight: '35px' }}>Vehicle profile</Nav.Link>
                <Nav.Link href="/admin/userprofile" style={{ color: 'white', marginRight: '35px' }}>User Profile</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="/user/login" style={{ color: 'white' }}>Logout</Nav.Link>
            </Nav>
        </Container>
    </Navbar>

    </div>


}

export default AdminDashboard;
