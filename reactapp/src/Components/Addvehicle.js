
import React,{useEffect} from 'react';
import {  Card } from 'react-bootstrap'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import axios from "axios";
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
    const URL = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm
    const initialValues = {
        addName: '',
        addTiming: '',
        addFromTo: '',
        addImageUrl: '',
        addPrice: '',
        Traincapacity: '',
        addDescription: ''
    }
    const validationSchema = Yup.object({
        addName: Yup.string().required('*Required'),
        addTiming: Yup.string().required('*Required'),
        addFromTo: Yup.string().required('*Required'),
        addImageUrl: Yup.string().required('*Required').matches(URL,'Url is not valid'),
        addPrice: Yup.number().typeError('*You must specify a number').required('*Required'),
        Traincapacity: Yup.number().typeError('*You must specify a number').required('*Required'),
        addDescription: Yup.string().required('*Required'),
    })
    const onSubmit = (values, onSubmitProps) => {
        console.log(values);
        alert("Success");
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

                        <label htmlFor='addName'>Vehicle Name</label>
                        <div className="col-sm-6">
                            <Field
                                type='text'
                                id='addName'
                                name='addName'
                                placeholder='Enter the name'
                                className='form-control' />
                            <ErrorMessage name='addName' >
                                {msg => <div className='error'>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <label htmlFor='addTiming'>Available Time</label>
                        <div className="col-sm-6">
                            <Field
                                type='text'
                                id='addTiming'
                                name='addTiming'
                                placeholder='Enter the Available Timing'
                                className='form-control' />
                            <ErrorMessage name='addTiming' >
                                {msg => <div className='error'>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <label htmlFor='addFromTo'>From-To</label>
                        <div className="col-sm-6">
                            <Field
                                type='text'
                                id='addFromTo'
                                name='addFromTo'
                                placeholder='Enter the from and to'
                                className='form-control' />
                            <ErrorMessage name='addFromTo' >
                                {msg => <div className='error'>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <label htmlFor='addImageUrl'>ImageUrl</label>
                        <div className="col-sm-6">
                            <Field
                                type='text'
                                id='addImageUrl'
                                name='addImageUrl'
                                placeholder='Enter the Image Url'
                                className='form-control' />
                            <ErrorMessage name='addImageUrl' >
                                {msg => <div className='error'>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <label htmlFor='addPrice'>Fair</label>
                        <div className="col-sm-6">
                            <Field
                                type='text'
                                id='addPrice'
                                name='addPrice'
                                placeholder='Enter the fair per person'
                                className='form-control' />
                            <ErrorMessage name='addPrice' >
                                {msg => <div className='error'>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <label htmlFor='Traincapacity'>Occupancy</label>
                        <div className="col-sm-6">
                            <Field
                                type='text'
                                id='Traincapacity'
                                name='Traincapacity'
                                placeholder='Enter no of capacity'
                                className='form-control' />
                            <ErrorMessage name='Traincapacity'>
                                {msg => <div className='error'>{msg}</div>}
                            </ErrorMessage>
                        </div>

                        <label htmlFor='addDescription'>Description</label>
                        <div className="col-sm-6">
                            <Field
                                as='textarea'
                                type='text'
                                id='addDescription'
                                name='addDescription'
                                placeholder='Description'
                                className='form-control' />
                            <ErrorMessage name='addDescription'>
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
