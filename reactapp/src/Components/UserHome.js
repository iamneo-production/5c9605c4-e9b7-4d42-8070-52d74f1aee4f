import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDashboard from './UserDashboard';
import axios from 'axios'
import { Card, Row, Col, Container } from 'react-bootstrap';
function UserHome() {
  useEffect(() => {
    document.title = "TravelYaari  ||  User";
  }, []);
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
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
      <Row>
        {
          posts?.map((post)=>{
            return(<Col>
            <Card key={post.id}>{post.title}</Card>
            </Col>)
          })
        }
      </Row>
    </Container>
  </div>


}

export default UserHome;
