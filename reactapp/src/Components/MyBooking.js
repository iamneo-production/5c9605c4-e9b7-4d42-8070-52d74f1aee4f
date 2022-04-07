import React, { useEffect, useState } from 'react'
import UserDashboard from './UserDashboard';
import { Table, Button, Modal } from 'react-bootstrap'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import './Styles/booking.css'
import './Styles/mybooking.css'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { FaStar } from "react-icons/fa";

function MyBooking() {
    const styles = {
        stars: {
            display: "flex",
            flexDirection: "row",
          }
    }
    const [posts, setPost] = useState();
    const [show, setShow] = useState(false);
    const [ticketdetails, setTicketdetails] = useState({});
    const username = localStorage.getItem("username");
    const userid = localStorage.getItem("userid");
    const currentDate = new Date().toISOString().substr(0, 10);

    console.log(currentDate);
    const handleCancel = (id, bookingDate) => {
        if (bookingDate > currentDate) {

            if (window.confirm('Are you sure of cancelling the ticket?')) {

                axios.delete(`https://8080-ebadadfaceebbeceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/deleteBookingById/${id}`, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                }).then((response) => {
                    toast.success('Cancelled successfully', {
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
            }
        }
        else {
            console.log(currentDate)
            console.log(bookingDate > currentDate)
            toast.error('Sorry ,cannot cancel the ticket', {
                position: "top-center",
                closeOnClick: true,
                progress: undefined,
                autoClose: 5000,
                hideProgressBar: true,
                pauseOnHover: true,
                draggable: true
            })
        }
    }
    useEffect(() => {
        document.title = "TravelYaari  ||  MyBooking";
    }, []);
    useEffect(() => {
        axios.get(`https://8080-ebadadfaceebbeceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/getbyuserid/${userid}`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            }
        }).then((res) => {
            console.log(res.data)
            setPost(res.data)
        })
            .catch((err) =>
                console.log(err))
    }, [])
    const [data, setData] = useState({});
    const handleShow = (posts, id) => {
        setShow(true);
        setData((prev) => ({
            ...prev,
            date: posts.date,
            from: posts.from,
            id: posts.id,
            noOfPersons: posts.noOfPersons,
            pricePerHead: posts.pricePerHead,
            to: posts.to,
            userid: posts.userid,
            vehicleName: posts.vehicleName,
            vehicleTiming: posts.vehicleTiming
        }))
    };
    console.log(data);
    const handleClose = () => setShow(false);

    const showAmount = (data) => {
        return data.pricePerHead * data.noOfPersons;
    }
    localStorage.getItem("username")





    return <div id="bgimg">

        <UserDashboard />


        <Table striped bordered hover variant="light" id="bookingtable" >
            <thead>
                <tr>
                    <th>Booked on</th>
                    <th>View ticket</th>
                    <th>Cancel ticket</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts?.map((post, index) => {
                        return <tr key={post.id}>
                            <td>{post.date}</td>

                            <td><Button className='btn btn-info' id='viewTicketbtn' onClick={() => { handleShow(post) }}>ViewTicket</Button></td>
                            <td><Button className='btn btn-warning' id='cancelTicketbtn' onClick={() => { handleCancel(post.id, post.date) }}>Cancel Booking</Button></td>
                        </tr>
                    })
                }


            </tbody>

        </Table>
        <ToastContainer />
        <Modal show={show} dialogclassNameName="modal-100w" onHide={handleClose} >
            <div className="wrapper bg-white">
                <form id="viewticket">
                    <ModalHeader> <h2>Booking Details</h2></ModalHeader>

                   
        </Modal>
    </div>
}
export default MyBooking;
