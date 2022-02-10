
import React from 'react';
import {Navbar,Nav,Card,Container,Form,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function Dashboard() {

   
    return<div><Navbar collapseOnSelect  >
   
    <Navbar.Brand href="#home" style={{color:'white'}}>Travel Yaari</Navbar.Brand>
    <Container>
    <Nav className="me-auto" >
      <Nav.Link href="#home" style={{color:'white',marginRight:'35px'}}>Home</Nav.Link>
      <Nav.Link href="#features" style={{color:'white',marginRight:'35px'}}>Dashboard</Nav.Link>
      <Nav.Link href="#pricing" style={{color:'white',marginRight:'35px'}}>My Booking</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link style={{color:'white'}}>Logout</Nav.Link>
    </Nav>
    </Container>
 </Navbar>
 <Card>
   
<Card.Body>
<div className="forms">
  <Form style={{marginRight:'5rem'}}>
      <Form.Control type="search" placeholder="search"></Form.Control>
  </Form>
 </div>

 
</Card.Body>
 </Card>
</div>


}

export default Dashboard;
