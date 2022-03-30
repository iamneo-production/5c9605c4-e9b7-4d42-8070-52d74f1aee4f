import React,{useEffect, useState} from 'react'
import UserDashboard from './UserDashboard';
import {Table,Button,Modal} from 'react-bootstrap'
import axios from 'axios';
import { toast,ToastContainer } from 'react-toastify';

import './Styles/mybooking.css'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
function MyBooking(){
    const [posts,setPost]=useState();
    const [show, setShow] = useState(false);
    const [ticketdetails, setTicketdetails] = useState({});
    const currentDate=new Date().toISOString().substr(0, 10);
    console.log(currentDate);
    const handleCancel=(id,bookingDate)=>{
        if(bookingDate > currentDate){
            
            if(window.confirm('Are you sure of cancelling the ticket?')){
               
           axios.delete(`https://8080-decaafdbcaceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/user/deleteBookingById/${id}`).then((response)=>{
               toast.success('Cancelled successfully',{
                position: "top-center",
                closeOnClick:true,
                progress:undefined,
                autoClose:5000,
                hideProgressBar: true,
                pauseOnHover: true,
                draggable: true
              })
               window.location.reload();
           })}
        }
        else{
            console.log(currentDate)
            console.log(bookingDate>currentDate)
            toast.error('Sorry ,cannot cancel the ticket',{
                position: "top-center",
                closeOnClick:true,
                progress:undefined,
                autoClose:5000,
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
        axios.get("https://8080-decaafdbcaceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/user/bookings").then((res) => {
            console.log(res.data)
            setPost(res.data)
        })
            .catch((err) =>
                console.log(err))
    }, [])
    const handleShow = (id) => {
        setShow(true);
        axios.get(`https://8080-decaafdbcaceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/user/getBookingById/${id}`)
          .then((response) => {
            setTicketdetails(response.data);
            
          })
      };
      const handleClose = () => setShow(false);
    
    return <div id="bgimg">
      
         <UserDashboard />
         

            <Table striped bordered hover variant="dark" id="bookingtable" >
                <thead>
                    <tr>
                        <th>Booked on</th>
                        <th>View ticket</th>
                        <th>Cancel ticket</th>
                    </tr>
                </thead>
                <tbody>
                {
                        posts?.map((post) => {
                return <tr key={post.id}>
                        <td>{post.date}</td>
                       
                        <td><Button className='btn btn-info' onClick={() => { handleShow(post.id) }}>ViewTicket</Button></td>
                        <td><Button className='btn btn-warning' onClick={()=>{handleCancel(post.id,post.date)}}>Cancel Booking</Button></td>
                    </tr>
                        })
                        }
                
                    
                </tbody>

            </Table>
            <ToastContainer/>
            <Modal show={show}   dialogclassNameName="modal-90w" onHide={handleClose} >
            <div className="wrapper bg-white">
    <form action="#">
       <ModalHeader> <h2>Booking Details</h2></ModalHeader>
       <div className="form-group d-sm-flex margin">
            <div className="d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative"> <input type="text" required placeholder="Busname" value={ticketdetails.vehicleName} className="form-control"/>
                <div className="label" id="busname"></div> <span className="fas fa-dot-circle "></span>
            </div>
           
        </div>
        <div classN ame="form-group d-sm-flex margin">
            <div className="d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative"> <input type="text" required placeholder="From Date" value={ticketdetails.date}className="form-control"/>
                <div className="label" id="from"></div>
            </div>
            
        </div>
        <div className="form-group d-sm-flex margin">
           <div className="form-group border-bottom d-flex align-items-center position-relative"> <input type="text" value={ticketdetails.from} required placeholder="From place" className="form-control"/>
            <div className="label" id="fromplace"></div> <span className="fas fa-users text-muted"></span>
           </div>
           <div className="form-group border-bottom d-flex align-items-center position-relative"> <input type="text" value={ticketdetails.to} required placeholder="To place" className="form-control"/>
            <div className="label" id="toplace"></div> <span className="fas fa-users text-muted"></span>
           </div>
        </div>
        <div className="form-group d-sm-flex margin">
           <div className="form-group border-bottom d-flex align-items-center position-relative"> <input type="text" value={ticketdetails.noOfPersons} required placeholder="Number of persons" className="form-control"/>
            <div className="label" id="person"></div> <span className="fas fa-users text-muted"></span>
           </div>
           <div className="form-group border-bottom d-flex align-items-center position-relative"> <input type="text" required placeholder="Price per person" value={ticketdetails.pricePerHead} className="form-control"/>
            <div className="label" id="price"></div> <span className="fas fa-users text-muted"></span>
           </div>
        </div>
        <div className="form-group my-3">
            <div className="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3" onClick={handleClose}>Close </div>
        </div>
    </form>

    

</div>

            </Modal>
         </div>
}
export default MyBooking;
