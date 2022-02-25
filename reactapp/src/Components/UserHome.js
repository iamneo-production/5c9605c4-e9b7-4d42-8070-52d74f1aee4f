import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDashboard from './UserDashboard';
import axios from 'axios'
import './Styles/UserHome.css'
import { BiPencil,BiCut } from "react-icons/bi";
import { Card, Row, Col,Container } from 'react-bootstrap';
function UserHome() {
  useEffect(() => {
    document.title = "TravelYaari  ||  User";
  }, []);
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get("https://8080-ebadadfaceebbeceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/admin/vehicles")
      .then(res => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return <div>
    <UserDashboard />
    <Container>
    <div className="col-sm-6">
      <input id="search" type="text" className="form-control" placeholder="Search for buses"/>
    </div>
      </Container>
    <Row>
      {
        posts?.map((post) => {
          return (

            <Col xs={12} md={4} lg={3} key={post.id}>
              <Card id="user_card">
                <Card.Img variant="top" id="bus_img" src={post.vehicleImageURL} />
                <Card.Body id='bus_body'>
                  <Card.Text>{post.vehicleName}</Card.Text>
                  <Card.Text>{post.vehicleTiming}</Card.Text>
                  <Card.Text>{post.vehicleFromTo}</Card.Text>
                  <Card.Link id="editBus"><BiPencil /></Card.Link>
                  <Card.Link id="deleteBus" ><BiCut /></Card.Link>
                </Card.Body>                                          
               </Card>
            </Col>)
        })
      }
    </Row>

  </div>


}

export default UserHome;
