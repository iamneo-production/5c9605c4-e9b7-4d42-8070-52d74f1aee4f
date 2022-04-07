import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
function VehicleProfile() {
    const history = useHistory()
    return<div>
    <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVzJTIwdHJhdmVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
    <Card.Body>
      <Card.Title>Vehicle Profile</Card.Title>
      <Card.Text>
       Details of the bus
      </Card.Text>
     <div class="btn-toolbar" >
      <Button  class="btn btn-primary " onClick={() => { history.push("/user/editvehicle") }} >Edit</Button>
      
      <Button  class="btn btn-primary " onClick={() => { history.push("/user/vehicleprofile") }} >Delete</Button>
      </div>
      
    </Card.Body>
  </Card>
  </div>
}

export default VehicleProfile;