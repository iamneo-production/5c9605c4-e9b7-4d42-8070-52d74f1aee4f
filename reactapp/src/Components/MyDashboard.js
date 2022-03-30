import React, { useEffect } from 'react'
import UserDashboard from './UserDashboard';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import {
    Formik,
    Form,
    Field,
    ErrorMessage,


} from 'formik'
import * as Yup from 'yup'
import './Styles/mydashboard.css'
import Validation from "./Validation.js";
function MyDashboard() {
    const history=useHistory()
    const usertoken = localStorage.getItem("token");
    // const [token, setToken] = useState();
    const yesterday = new Date(Date.now() - 86400000);
    const [busid, setBusid] = React.useState(localStorage.getItem("busiduser"));
    const [passengers, setPassengers] = React.useState('1');
    const [busdetails, setBusdetails] = React.useState({});
    const [name, setName] = React.useState();
    const [Age, setAge] = React.useState();
    const [Error, setError] = React.useState({
        name: "",
        age: ""
    })
    const initialValues = {
        fillFromDate: '',
        enterNoTicket: '1',
    }

    const validationSchema = Yup.object({
        fillFromDate: Yup.date().required('*Required').nullable().min(yesterday, '*Date cannot be in past'),
        // enterNoTicket: Yup.string().typeError('*You must specify a number').max(5, '*U can able to book only 5 tickets'),
    })

    const onSubmit = async (data, onSubmitProps) => {

        const data1 = {
            vehicleName: busdetails.vehicleName,
            vehicleTiming: busdetails.vehicleTiming,
            pricePerHead: busdetails.price,
            noOfPersons: data.enterNoTicket,
            date: data.fillFromDate,
            from: busdetails.vehicleFrom,
            to: busdetails.vehicleTo,
            userid: localStorage.getItem("userid")
        }
        console.log(data1);
        axios.post(`https://8080-ebadadfaceebbeceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/user/addBooking/`, data1, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((response) => {
            console.log(data1);

            toast.success('👍 Booked Successfully', {
                position: "top-center",
                closeOnClick: true,
                progress: undefined,
                autoClose: false,
                hideProgressBar: true,
                pauseOnHover: true,
                draggable: true
            })
            setTimeout(() => {
              history.push("/user/booking")
              }, 3000);


        }).catch((err) => {
            console.log(err);
            toast.error('👎 Failed to book!!!', {
                position: "top-center",
                closeOnClick: true,
                progress: undefined,
                autoClose: 5000,
                hideProgressBar: true,
                pauseOnHover: true,
                draggable: true
            })
        })
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()


    }
    useEffect(() => {
        axios.get(`https://8080-ebadadfaceebbeceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/admin/getVehicleById/${busid}`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            }
        }).then((response) => {
            setBusdetails(response.data);
        })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    useEffect(() => {
        document.title = "TravelYaari  ||  MyDashboard";
    }, []);


    //console.log(busdetails);
    var fields = [];
    for (let i = 1; i <= passengers; i++) {
        const index = i;
        fields.push(

            <div className="col-sm-6" key={i}>
                <label>Passenger {i}</label>
                <input type="text" id={"name" + index} className='form-control' required={true}
                    onChange={e => {
                        const n = e.currentTarget.value
                        setName(n)

                        setError({
                            ...Error,
                            name: (Validation.fullname(e.target.value) ? "" : "*Invalid Name")
                        });
                    }
                    } placeholder="Enter Name" style={{ marginTop: '5px' }} />
                <div id="error">{Error.name}</div>
                <input type="number" id="age" className='form-control' placeholder="Enter Age" required={true}
                    onChange={(e) => {
                        setAge(e.target.value);
                        setError({
                            ...Error,
                            age: (Validation.age(e.target.value) ? "" : "*Invalid Age")
                        });
                    }
                    }
                    style={{ marginTop: '15px' }} />
                <div id="error">{Error.age}</div>
                <select className="form-select" placeholder="Select Gender" style={{ marginTop: '15px' }} >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

            </div>)

    }

    console.log(passengers)
    return <div id="mybooking" >
        <UserDashboard />
        <Card id='bookcard' style={{ color: 'black' }} >
            <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                <Form>

                    <label htmlFor='vehicleName' style={{ marginTop: '5%' }}>Vehicle Name</label>
                    <div className="col-sm-6">
                        <Field
                            type='text'
                            id='vehicleName'
                            name='vehicleName'
                            placeholder='Enter the name'
                            className='form-control'
                            value={busdetails.vehicleName} />
                        <ErrorMessage name='vehicleName' >
                            {msg => <div className='error'>{msg}</div>}
                        </ErrorMessage>
                    </div>

                    <label htmlFor='vehicleFrom' >From place</label>
                    <div className="col-sm-6" >
                        <Field
                            type='text'
                            id='vehicleFrom'
                            name='vehicleFrom'
                            placeholder='Enter the from '
                            className='form-control'
                            value={busdetails.vehicleFrom} />

                        <ErrorMessage name='vehicleFrom' >
                            {msg => <div className='error'>{msg}</div>}
                        </ErrorMessage>
                    </div>

                    <label htmlFor='vehicleTo' >To place</label>
                    <div className="col-sm-6" >
                        <Field
                            type='text'
                            id='vehicleTo'
                            name='vehicleTo'
                            placeholder='Enter to'
                            className='form-control'
                            value={busdetails.vehicleTo} />
                        <ErrorMessage name='vehicleTo' >
                            {msg => <div className='error'>{msg}</div>}
                        </ErrorMessage>
                    </div>



                    <label htmlFor='time'>Time</label>
                    <div className="col-sm-6">
                        <Field
                            type='text'

                            id='time'
                            name='time'
                            placeholder='time'
                            className='form-control'
                            value={busdetails.vehicleTiming} />
                        <ErrorMessage name='time' >
                            {msg => <div className='error'>{msg}</div>}
                        </ErrorMessage>

                    </div>

                    <label htmlFor='price' >Price per head</label>
                    <div className="col-sm-6">
                        <Field
                            type='text'
                            id='price'
                            name='price'
                            placeholder='Enter the fare per person'
                            className='form-control'
                            value={busdetails.price} />
                        <ErrorMessage name='price' >
                            {msg => <div className='error'>{msg}</div>}
                        </ErrorMessage>
                    </div>

                    <label htmlFor='fillFromDate' >Date</label>
                    <div className="col-sm-6">
                        <Field
                            type='Date'
                            id='fillFromDate'
                            name='fillFromDate'
                            placeholder='Date'
                            className='form-control' />
                        <ErrorMessage name='fillFromDate' >
                            {msg => <div className='error'>{msg}</div>}
                        </ErrorMessage>
                    </div>

                    <label htmlFor='enterNoTicket' >No.of person</label>
                    <div className="col-sm-6">
                        <Field
                            type='text'
                            as='select'
                            id='enterNoTicket'
                            name='enterNoTicket'
                            placeholder='Enter no of person'
                            className='form-select'
                            onInput={(e) => {
                                const passenger = (e.currentTarget.value);
                                setPassengers(passenger);
                            }}
                            value={passengers}
                        >
                            <option id='enterNoTicket' value="1">1</option>
                            <option id='enterNoTicket' value="2">2</option>
                            <option id='enterNoTicket' value="3">3</option>
                            <option id='enterNoTicket' value="4">4</option>
                            <option id='enterNoTicket' value="5">5</option>
                        </Field>
                        <ErrorMessage name='enterNoTicket'>
                            {msg => <div className='error'>{msg}</div>}
                        </ErrorMessage>
                    </div>

                    <div>

                        {
                            fields.map((field) => (
                                <div>{field} </div>
                            ))
                        }


                    </div>


                    <button type='submit' className='btn btn-success' id='addbookingbtn' >Book</button>
                    <ToastContainer />

                </Form>
            </Formik>

        </Card>
    </div>
}
export default MyDashboard;