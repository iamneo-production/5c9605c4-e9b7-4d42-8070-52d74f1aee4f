import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDashboard from './UserDashboard';
import axios from 'axios'
import './Styles/UserHome.css'
import { Card, Row, Col, Accordion} from 'react-bootstrap';
function UserHome() {
  useEffect(() => {
    document.title = "TravelYaari  ||  User";
  }, []);
  const history=useHistory();
  const [posts, setPosts] = useState([])
  const [buses,setBuses]=useState([])
  
  const   onBookSubmit=(id)=>{
    localStorage.setItem("busiduser",id);
    history.push("/user/dashboard")
  }
  
  useEffect(() => {
    axios.get("https://8080-decaafdbcaceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/admin/vehicles")
      .then(res => {
        console.log(res)
        setPosts(res.data)
        setBuses(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  const handleSearchFrom = event=>{
    const valueFrom =event.target.value.toLowerCase();
    const searchBus= posts.filter(
      bus=>(`${bus.vehicleFrom}`.toLowerCase().includes(valueFrom))
    );
    setBuses(searchBus)
  }
  const handleSearchTo = event=>{
    const valueTo =event.target.value.toLowerCase();
    const searchBusTo= posts.filter(
      bus=>(`${bus.vehicleTo}`.toLowerCase().includes(valueTo))
    );
    setBuses(searchBusTo)
  }
  return <div id="userhome">
    <UserDashboard />
    
 
      
      <div className="col-sm-6">
     
      <div className="input-group" style={{marginLeft:'45%',marginTop:'5%'}} >
        <span className="input-group-text">From</span>
        <input type="text" className="form-control" id="searchFrom" 
            placeholder="Enter from place..." onInput={handleSearchFrom}/>
        <span className="input-group-text">
            To
        </span>
        <input type="text" className="form-control"  id="searchTo"   
            placeholder="Enter to place..." onInput={handleSearchTo} />
    </div>
    </div>
   
   
    <Row>
      {
        buses?.map((post) => {
          return (

            <Col xs={12} md={4} lg={3} key={post.id}>

              <Card id="user_card" >
                <Card.Img variant="top" id="bus_img" style={{width:'100%',height:'150px'}}  src={post.vehicleImageURL} />
                
                  <Accordion>
                    <Accordion.Header>{post.vehicleName}</Accordion.Header>
                    <Accordion.Body>
                      <Card.Text>Vehicle Name :{post.vehicleName}</Card.Text>
                      <Card.Text>Vehicle Timing :{post.vehicleTiming}</Card.Text>
                      <Card.Text>From  :{post.vehicleFrom}</Card.Text>
                      <Card.Text>To :{post.vehicleTo}</Card.Text>
                      <Card.Text>Vehicle Fare :{post.price}</Card.Text>
                      <Card.Text style={{ color: 'red' }}>Vehicle Description :{post.vehicleDescription}</Card.Text>
                    </Accordion.Body>
                  </Accordion>
              
                <Card.Footer>
                <button className="btn btn-success" style={{float:'right'}} onClick={()=>{
                  onBookSubmit(post.id);
                }}>Book</button>
              </Card.Footer>
              </Card>
            </Col>)
        })
      }
    </Row>
  </div>
}

export default UserHome;
