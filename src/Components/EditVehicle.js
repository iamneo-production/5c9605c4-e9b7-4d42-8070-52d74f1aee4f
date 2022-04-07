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
import './EditVehicle.css'



function EditVehicle() {
   // const URL = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm
    const initialValues = {
        vehicleName: '',
        vehicleTiming: '',
        vehicleFromTo: '',
        vehicleImageUrl: '',
        vehiclePrice: '',
        vehiclecapacity: '',
        vehicleDescription: ''
    }
    const validationSchema = Yup.object({
        vehicleName: Yup.string().required('*Required'),
        vehicleTiming: Yup.string().required('*Required'),
        vehicleFromTo: Yup.string().required('*Required'),
       // addImageUrl: Yup.string().required('*Required').matches(URL,'Url is not valid'),
        vehicleImageUrl:Yup.string().required('*Required'),
        vehiclePrice: Yup.number().typeError('*You must specify a number').required('*Required'),
        vehicleCapacity: Yup.number().typeError('*You must specify a number').required('*Required'),
        vehicleDescription: Yup.string().required('*Required'),
    })
    const onSubmit = async(data, onSubmitProps) => {
        const data1={
            vehicleName:data.vehicleName ,
            vehicleTiming:data.vehicleTiming ,
            vehicleFromTo:data.vehicleFromTo,
            vehicleImageUrl:data.vehicleImageUrl,
            vehiclePrice:data.vehiclePrice,
            vehicleCapacity:data.vehicleCapacity,
            vehicleDescription:data.vehicleDescription
       }
       console.log(data1);
          axios.post('https://8080-decaafdbcaceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/admin/addvehicle',data1).then(
            (response)=>{
              console.log(response);
              alert("Signup Success!");
            
            },(error)=>{
              console.log(error);
              alert("Signup failed!");
              console.log("error");
            }
          )
           onSubmitProps.setSubmitting(false)
          onSubmitProps.resetForm()
        }
    useEffect(() => {
        document.title = "TravelYaari  ||  EditVehicle";
      },[]);
    return <div>
      
        <Card>
            <Card.Body id="cardbody">
                <Card id="addcard">
                <Card.Title style={{textAlign:'center'}}><h2>Edit</h2></Card.Title>
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

                        <label htmlFor='vehicleTiming'>Available Time</label>
                        <div className="col-sm-6">
                            <Field
                                type='text'
                                id='vehicleTiming'
                                name='vehicleTiming'
                                placeholder='Enter the Available Timing'
                                className='form-control' />
                            <ErrorMessage name='vehicleTiming' >
                                {msg => <div className='error'>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <label htmlFor='vehicleFromTo'>From-To</label>
                        <div className="col-sm-6">
                            <Field
                                type='text'
                                id='vehicleFromTo'
                                name='vehicleFromTo'
                                placeholder='Enter the from and to'
                                className='form-control' />
                            <ErrorMessage name='vehicleFromTo' >
                                {msg => <div className='error'>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <label htmlFor='vehicleImageUrl'>ImageUrl</label>
                        <div className="col-sm-6">
                            <Field
                                type='text'
                                id='vehicleImageUrl'
                                name='vehicleImageUrl'
                                placeholder='Enter the Image Url'
                                className='form-control' />
                            <ErrorMessage name='vehicleImageUrl' >
                                {msg => <div className='error'>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <label htmlFor='vehiclePrice'>Fare</label>
                        <div className="col-sm-6">
                            <Field
                                type='text'
                                id='vehiclePrice'
                                name='vehiclePrice'
                                placeholder='Enter the fare per person'
                                className='form-control' />
                            <ErrorMessage name='vehiclePrice' >
                                {msg => <div className='error'>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <label htmlFor='vehicleCapacity'>Occupancy</label>
                        <div className="col-sm-6">
                            <Field
                                type='text'
                                id='vehicleCapacity'
                                name='vehicleCapacity'
                                placeholder='Enter no of capacity'
                                className='form-control' />
                            <ErrorMessage name='vehicleCapacity'>
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
                        <button type='submit' className='btn btn-primary' id='updateButton'>Update</button>
                       

                    </Form>
                </Formik>
                </Card>
            </Card.Body>
        </Card>
    </div>


}

export default EditVehicle;