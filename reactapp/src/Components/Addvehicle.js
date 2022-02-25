
import React,{useEffect} from 'react';
import {  Card } from 'react-bootstrap'
//import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
//import { useHistory } from 'react-router-dom'
import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik'
import * as Yup from 'yup'
import './Styles/Addvehicle.css'
import AdminDashboard from './AdminDashboard'

function Addvehicle() {
   // const URL = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm
    const initialValues = {
        vehicleName: '',
        vehicleTiming: '',
        vehicleFromTo: '',
        vehicleImageURL: '',
        price: '',
        capacity: '',
        vehicleDescription: ''
    }
    const validationSchema = Yup.object({
        vehicleName: Yup.string().required('*Required'),
        vehicleTiming: Yup.string().required('*Required'),
        vehicleFromTo: Yup.string().required('*Required'),
        //vehicleImageURL: Yup.string().required('*Required').matches(URL,'Url is not valid'),
        vehicleImageURL:Yup.string().required('*Required'),
        price: Yup.number().typeError('*You must specify a number').required('*Required'),
        capacity: Yup.number().typeError('*You must specify a number').required('*Required').max(50,'*Should be less than 50'),
        vehicleDescription: Yup.string().required('*Required'),
    })
    const onSubmit = async(data, onSubmitProps) => {
        const data1={
            vehicleName:data.vehicleName ,
            vehicleTiming:data.vehicleTiming.toString() ,
            vehicleFromTo:data.vehicleFromTo,
            vehicleImageURL:data.vehicleImageURL,
            price:data.price,
            capacity:data.capacity,
            vehicleDescription:data.vehicleDescription
       }
       console.log(data1);
          axios.post('https://8080-ebadadfaceebbeceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/admin/addvehicle',data1).then(
            (response)=>{
              console.log(response);
              alert("Successfully added!");
            
            },(error)=>{
              console.log(error);
              alert("Failed!");
              console.log("error");
            }
          )
           onSubmitProps.setSubmitting(false)
          onSubmitProps.resetForm()
        }
    useEffect(() => {
        document.title = "TravelYaari  ||  AddVehicle";
      },[]);
    return <div><AdminDashboard/>
        <Card>
            <Card.Body id="cardbody">
                <Card id="addcard">
                <Card.Title style={{textAlign:'center'}}><h2>Add</h2></Card.Title>
                <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                    <Form>

                        <label htmlFor='vehicleName'>Vehicle Name</label>
                        <div className="col-sm-6">
                            <Field
                                type='text'
                                id='vehicleName'
                                name='vehicleName'
                                placeholder='Enter the name'
                                className='form-control' />
                            <ErrorMessage name='vehicleName' >
                                {msg => <div className='error'>{msg}</div>}
                            </ErrorMessage>
                        </div>

                       

                        <label htmlFor='vehicleFromTo'>From</label>
                        <div className="col-sm-6">
                            <Field
                                type='text'
                                id='vehicleFromTo'
                                name='vehicleFromTo'
                                placeholder='Enter the from '
                                className='form-control' />
                            <ErrorMessage name='vehicleFromTo' >
                                {msg => <div className='error'>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <label htmlFor='vehicleFromTo'>To</label>
                        <div className="col-sm-6">
                            <Field
                                type='text'
                                id='vehicleFromTo'
                                name='vehicleFromTo'
                                placeholder='Enter to'
                                className='form-control' />
                            <ErrorMessage name='vehicleFromTo' >
                                {msg => <div className='error'>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <label htmlFor='vehicleTiming'>Available Time</label>
                        <div className="col-sm-6">
                            <Field
                                type='time'
                               
                                id='vehicleTiming'
                                name='vehicleTiming'
                                placeholder='Enter the Available Timing'
                                className='form-control' />
                            <ErrorMessage name='vehicleTiming' >
                                {msg => <div className='error'>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <label htmlFor='vehicleImageURL'>Select the Image</label>
                        <div className="col-sm-6">
                            <Field
                                type='text'
                                id='vehicleImageURL'
                                name='vehicleImageURL'
                                placeholder='Enter the Image Url'
                                className='form-control' />
                            <ErrorMessage name='vehicleImageURL' >
                                {msg => <div className='error'>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <label htmlFor='price'>Fare</label>
                        <div className="col-sm-6">
                            <Field
                                type='text'
                                id='price'
                                name='price'
                                placeholder='Enter the fare per person'
                                className='form-control' />
                            <ErrorMessage name='price' >
                                {msg => <div className='error'>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <label htmlFor='capacity'>Occupancy</label>
                        <div className="col-sm-6">
                            <Field
                                type='text'
                                id='capacity'
                                name='capacity'
                                placeholder='Enter no of capacity'
                                className='form-control' />
                            <ErrorMessage name='capacity'>
                                {msg => <div className='error'>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <label htmlFor='vehicleDescription'>Description</label>
                        <div className="col-sm-6">
                            <Field
                                as='textarea'
                                type='text'
                                id='vehicleDescription'
                                name='vehicleDescription'
                                placeholder='Description'
                                className='form-control' />
                            <ErrorMessage name='vehicleDescription'>
                                {msg => <div className='error'>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <button type='submit' className='btn btn-primary' id='addButton' >Add</button>
                       

                    </Form>
                </Formik>
                </Card>
            </Card.Body>
        </Card>
    </div>


}

export default Addvehicle;
