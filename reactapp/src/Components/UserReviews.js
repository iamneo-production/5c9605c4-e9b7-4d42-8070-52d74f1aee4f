import { React, useEffect, useState } from "react"
import { Table, Button, Modal } from "react-bootstrap"
import UserDashboard from "./UserDashboard";
import { FaStar } from "react-icons/fa";
import './Styles/UserReviews.css'
import axios from "axios";
import ReactStars from "react-rating-stars-component";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function UserReviews() {
 
  const id = localStorage.getItem("userid")
  const name = localStorage.getItem("username")
  const [des, setDes] = useState()
  const [description, setDescription] = useState("");
  const [review, setReview] = useState([])
  const [show, setShow] = useState(false)
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)

  }
  const onSubmit = () => {
    setShow(false)
    const data = {
      userid: localStorage.getItem("userid"),
      username: localStorage.getItem("username"),
      desc: description,
      rating: currentValue
    }
    axios.post("https://8080-ebadadfaceebbeceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/addreview/", data, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then((res) => {
      console.log(res)
      toast.success("Review submitted successfully")
      window.location.reload();
    }).catch((err) => {
      console.log(err)
    })
  }
  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };


  const handleShow = () => {
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }
  useEffect(() => {
    document.title = "TravelYaari  ||  Review";
  }, []);
  useEffect(() => {
    axios.get("https://8080-ebadadfaceebbeceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/reviews", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then((res) => {
      console.log(res.data)
       setReview(res.data)
})
      .catch((err) =>
        console.log(err))
  }, []);
  // console.log(des)
  return <div id="reviewbody">
    <UserDashboard />
    <ToastContainer/>
    <Table striped bordered hover id="reviewtable">
      <thead>
        <tr>
          <th>UserName</th>
          <th>Review</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {
          review?.map((rev) => {
            if(rev.vid==null){
            return (
              <tr key={rev.id}>
                <td>{rev.username}</td>
                <td>{rev.desc}</td>
                <td><ReactStars
                count={parseInt(rev.rating)}
                size={30}
                color="#ffd700"
                /></td>
              </tr>
            )
            }
          })
        }

      </tbody>
      <tfoot>
        <tr><td colSpan={3} ><Button style={{ marginLeft: '40%' }} onClick={() => { handleShow() }}>Add my review</Button></td></tr>

      </tfoot>
    </Table>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>TravelYaari Reviews</Modal.Header>
      <Modal.Body>
        
          
      </Modal.Body>
    </Modal>
  </div>

}
export default UserReviews;