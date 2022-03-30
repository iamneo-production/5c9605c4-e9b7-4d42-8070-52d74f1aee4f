import React, { useEffect, useState } from 'react'
import AdminDashboard from './AdminDashboard'
import './Styles/Usersprofile.css'
import { Button, Modal, Form, ModalHeader } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import axios from 'axios'
import { BiPencil, BiTrash } from "react-icons/bi";
import { toast, ToastContainer } from 'react-toastify'
function UsersProfile() {

    const [show, setShow] = useState(false)
    const [userDetails, setUserDetails] = useState({})
    const handleShow = (id) => {

        setShow(true);
        axios.get(`https://8080-ebadadfaceebbeceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/user/getUserById/${id}`, {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          }).then((response) => {
            console.log(response.data.body);
            setUserDetails(response.data.body)
        })
            .catch((err) => {
                console.log(err);
            })


    }
    const EditSubmit = (userid) => {
        console.log(userid)
        console.log(userDetails);
        axios.put(`https://8080-ebadadfaceebbeceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/user/updateUserById/${userid}`,userDetails,{
            headers: {
              Authorization: localStorage.getItem("token")
            }
          }).then((response) => {
            console.log(response);
            toast.success('Updated Successfully', {
                position: "top-center",
                closeOnClick: true,
                progress: undefined,
                autoClose: 5000,
                hideProgressBar: true,
                pauseOnHover: true,
                draggable: true
            })
            window.location.reload();
        })
            .error((err) => {
                console.log(err)

            })
    }
    const handleChange = (event, field) => {
        setUserDetails({
            ...userDetails,
            [field]: event.target.value,
        })
    }
    const onClickDelete = async (data) => {
        if (window.confirm('Are you sure?')) {
            axios.delete(`https://8080-ebadadfaceebbeceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/user/deleteUserById/${data}`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
            ).then((response) => {
                console.log(response);
                window.location.reload();
            })
        }
        toast.success('Deleted Successfully', {
            position: "top-center",
            closeOnClick: true,
            progress: undefined,
            autoClose: 5000,
            hideProgressBar: true,
            pauseOnHover: true,
            draggable: true
        })
    }
    const [posts, setPost] = useState([])
    useEffect(() => {
        axios.get("https://8080-ebadadfaceebbeceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/user/allUsers", {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          }).then((res) => {
            console.log(res)
            setPost(res.data)
        })
            .catch((err) =>
                console.log(err))
    }, [])
    return <div id="usersbody" >
        <AdminDashboard />


        <Table striped bordered hover variant="dark" id="usertable" >
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>Email id</th>
                    <th>Mobile number</th>

                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>

                {
                    posts?.map((post) => {
                        return (
                            <tr key={post.id}>
                                <td>{post.username}</td>
                                <td>{post.email}</td>
                                <td>{post.mobileNumber}</td>

                                <td><Button onClick={() => { handleShow(post.id) }} id="edituserbtn"><BiPencil /> </Button></td>
                                <td><Button className="btn btn-warning" onClick={() => { onClickDelete(post.id) }} id="deleteuserbtn"><BiTrash /></Button></td>

                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
        <ToastContainer />

        <Modal show={show}>
            <ModalHeader closeButton><div style={{ marginLeft: '35%' }}><h3>User Details</h3></div></ModalHeader>
            <Form>
                <Modal.Body>
                    <label htmlFor="username">UserName</label>
                    <div className="col-sm-6">
                        <Form.Control id="username" name="username" placeholder="Enter User name" value={userDetails.username || ''} onChange={(e) => {
                            handleChange(e, "username")
                        }} ></Form.Control>
                    </div>
                    <label htmlFor="email">Email</label>
                    <div className="col-sm-6">
                        <Form.Control id="email" name="email" placeholder="Enter email id" value={userDetails.email || ''} onChange={(e) => {
                            handleChange(e, "email")
                        }} ></Form.Control>
                    </div>
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <div className="col-sm-6">
                        <Form.Control id="mobileNumber" name="mobileNumber" placeholder="Enter mobile number" value={userDetails.mobileNumber || ''} onChange={(e) => {
                            handleChange(e, "mobileNumber")
                        }} ></Form.Control>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-warning" onClick={() => { setShow(false) }}>Cancel</Button>
                    <Button onClick={() => { EditSubmit(userDetails.id) }}>Update</Button>

                </Modal.Footer>

            </Form>

        </Modal>
    </div>
}
export default UsersProfile;