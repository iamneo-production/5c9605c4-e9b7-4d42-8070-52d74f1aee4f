import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Styles/vehicleprofile.css'
import { BiPencil, BiTrash } from "react-icons/bi";
import { Card, Row, Col, Modal, Form, Accordion, Button } from 'react-bootstrap';
import AdminDashboard from './AdminDashboard';

//import * as Yup from 'yup'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function VehicleProfile() {
  const [show, setShow] = useState(false);
  const [busdetails, setBusdetails] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    axios.get(`https://8080-ebadadfaceebbeceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/admin/getVehicleById/${id}`,{
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((response) => {
        setBusdetails(response.data);
      })
  };
  const handleChange = (event, field) => {
    setBusdetails({
      ...busdetails,
      [field]: event.target.value,
    })
  }
  // const initialValues = {
  //   vehicleName: '',
  //   vehicleTiming: '',
  //   vehicleFromTo: '',
  //   vehicleImageURL: '',
  //   price: '',
  //   capacity: '',
  //   vehicleDescription: ''
  // }
  // const validationSchema = Yup.object({
  //   vehicleName: Yup.string().required('*Required'),
  //   vehicleTiming: Yup.string().required('*Required'),
  //   vehicleFromTo: Yup.string().required('*Required'),
  //   // vehicleImageURL: Yup.string().required('*Required').matches(URL,'Url is not valid'),
  //   vehicleImageURL: Yup.string().required('*Required'),
  //   price: Yup.number().typeError('*You must specify a number').required('*Required'),
  //   capacity: Yup.number().typeError('*You must specify a number').required('*Required').max(50, '*Should be less than 50'),
  //   vehicleDescription: Yup.string().required('*Required'),
  // })
  const onSubmitEdit = (id) => {
    setShow(false);
    console.log(id);
    console.log(busdetails);
    axios.put(`https://8080-ebadadfaceebbeceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/admin/updateVehicleById/${id}`, busdetails, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then((response) => {
      console.log(response);

      window.location.reload();
    })
  }

  const handleOnClickDelete = async (data) => {
    if (window.confirm('Are you sure you want to delete?')) {
      axios.delete(`https://8080-ebadadfaceebbeceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/admin/deleteVehicleById/${data}`, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
      )
        .then((response) => {
          console.log(response);
          window.location.reload();

        })
      toast.success('👍 Deleted Successfully', {
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
    document.title = "TravelYaari  ||  VehicleProfile";
  }, []);
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get("https://8080-ebadadfaceebbeceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/admin/vehicles", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then(res => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return <div id="vehiclebody">

    <AdminDashboard />

    <Card.Body >

      <Row>
        {
          posts?.map((post) => {

            return (

              <Col xs={12} md={4} lg={3} key={post.id}>

                <Card id="user_card" variant="dark">
                  <Card.Img variant="top" id="bus_img" style={{ width: '100%', height: '150px' }} src={post.vehicleImageURL} />
                  <Accordion>

                    <Accordion.Header>{post.vehicleName}</Accordion.Header>
                    <Accordion.Body id='bus_body'>

                      <Card.Text>Vehicle Name :{post.vehicleName}</Card.Text>
                      <Card.Text>Vehicle Time :{post.vehicleTiming}</Card.Text>
                      <Card.Text>From  :{post.vehicleFrom}</Card.Text>
                      <Card.Text>To :{post.vehicleTo}</Card.Text>
                      <Card.Text>Fare :{post.price}</Card.Text>
                      <Card.Text style={{ color: 'red' }}>Description :{post.vehicleDescription}</Card.Text>

                    </Accordion.Body>

                  </Accordion>
                  <Card.Footer>
                    <Button id="editBus" className="btn btn-success
                      " onClick={() => { handleShow(post.id) }}><BiPencil /></Button>
                    <Button id="deleteBus" className="btn btn-warning" onClick={() => handleOnClickDelete(post.id)} ><BiTrash /></Button>
                    <ToastContainer />
                  </Card.Footer>
                </Card>

              </Col>
            )

          })

        }

      </Row>

    </Card.Body>

    <Modal show={show} onHide={handleClose}>
      {/* <Formik initialValues={initialValues}
        vaonSubmit={onSubmitEditlidationSchema={validationSchema}
        onSubmit={onSubmitEdit}> */}
      <Modal.Header closeButton><div style={{ marginLeft: '45%' }}><h3>Edit</h3></div></Modal.Header>
      <Form >
        <Modal.Body>
          <label htmlFor='vehicleName'>Vehicle Name</label>
          <div className="col-sm-6">
            <Form.Control id='vehicleName' name='vehicleName' placeholder='Enter the name' className='form-control' value={busdetails.vehicleName}
              onChange={(e) => {
                handleChange(e, "vehicleName")
              }} required />
            {/* <ErrorMessage name='vehicleName' >
              {msg => <div className='error'>{msg}</div>}
            </ErrorMessage> */}
          </div>

          <label htmlFor='vehicleTiming'>Available Time</label>
          <div className="col-sm-6">
            <Form.Control type='time' id='vehicleTiming' name='vehicleTiming' placeholder='Enter the Available Timing' className='form-control'
              onChange={(e) => {
                handleChange(e, "vehicleTiming")
              }}
              value={busdetails.vehicleTiming} />
            {/* <ErrorMessage name='vehicleTiming' >
              {msg => <div className='error'>{msg}</div>}
            </ErrorMessage> */}
          </div>

          <label htmlFor='vehicleFrom'>From</label>
          <div className="col-sm-6">
            <Form.Control type='text' id='vehicleTo ' name='vehicleFrom' placeholder='Enter from place' className='form-control'
              onChange={(e) => {
                handleChange(e, "vehicleFrom")
              }} value={busdetails.vehicleFrom} />
            {/* <ErrorMessage name='vehicleFromTo' >
              {msg => <div className='error'>{msg}</div>}
            </ErrorMessage> */}
          </div>

          <label htmlFor='vehicleTo'>To</label>
          <div className="col-sm-6">
            <Form.Control type='text' id='vehicleTo ' name='vehicleTo' placeholder='Enter to place' className='form-control'
              onChange={(e) => {
                handleChange(e, "vehicleTo")
              }} value={busdetails.vehicleTo} />
            {/* <ErrorMessage name='vehicleFromTo' >
              {msg => <div className='error'>{msg}</div>}
            </ErrorMessage> */}
          </div>




          <label htmlFor='vehicleImageURL'>Select Image</label>
          <div className="col-sm-6">
            <Form.Control type='text' id='vehicleImageURL' name='vehicleImageURL' placeholder='Enter the Image Url' className='form-control'
              onChange={(e) => {
                handleChange(e, "vehicleImageURL")
              }}
              value={busdetails.vehicleImageURL} />
            {/* <ErrorMessage name='vehicleImageURL' >
              {msg => <div className='error'>{msg}</div>}
            </ErrorMessage> */}
          </div>

          <label htmlFor='price'>Fare</label>
          <div className="col-sm-6">
            <Form.Control type='text' id='price' name='price' placeholder='Enter the fare per person' className='form-control'
              onChange={(e) => {
                handleChange(e, "price")
              }} value={busdetails.price} />
            {/* <ErrorMessage name='price' >
              {msg => <div className='error'>{msg}</div>}
            </ErrorMessage> */}
          </div>

          <label htmlFor='capacity'>Occupancy</label>
          <div className="col-sm-6">
            <Form.Control type='text' id='capacity' name='capacity' placeholder='Enter no of capacity' className='form-control'
              onChange={(e) => {
                handleChange(e, "capacity")
              }} value={busdetails.capacity} />
            {/* <ErrorMessage name='capacity'>
              {msg => <div className='error'>{msg}</div>}
            </ErrorMessage> */}
          </div>

          <label htmlFor='vehicleDescription'>Description</label>
          <div className="col-sm-6">
            <Form.Control as='textarea' type='text' id='vehicleDescription' name='vehicleDescription' placeholder='Description' className='form-control'
              onChange={(e) => {
                handleChange(e, "vehicleDescription")
              }}
              value={busdetails.vehicleDescription} />
            {/* <ErrorMessage name='vehicleDescription'>
              {msg => <div className='error'>{msg}</div>}
            </ErrorMessage> */}
          </div>
        </Modal.Body>

      </Form>
      <Modal.Footer>
        <Button type="submit" className='btn btn-warning' onClick={() => { handleClose() }} style={{ float: 'left' }} >Close</Button>
        <Button type='submit' className='btn btn-primary' id='addButton' onClick={(e) => {
          e.preventDefault();
          onSubmitEdit(busdetails.id);
        }} style={{ margin: '5px' }}>Update</Button>

      </Modal.Footer>
      {/* </Formik> */}
    </Modal>
  </div>


}

export default VehicleProfile;
