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
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300
    },
    button: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 300,
      padding: 10,
    }

  };
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

  };
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
    axios.post("https://8080-ebadadfaceebbeceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/user/addreview/", data, {
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
    axios.get("https://8080-ebadadfaceebbeceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/user/reviews", {
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
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                id="rating"
                value={currentValue}
                onClick={() => handleClick(index + 1)}
                color={(currentValue) > index ? colors.orange : colors.grey}
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }}

              />
            )
          })}
        </div>
        <label value={name}>Hello {name}</label>
        <textarea
          id="desc"
          placeholder="What's your experience?"
          style={styles.textarea}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={des}
        />
        <Button
          type="submit"
          style={styles.button}
          onClick={() => {
            onSubmit()
          }}
        >
          Submit
        </Button>
      </Modal.Body>
    </Modal>
  </div>

}
export default UserReviews;