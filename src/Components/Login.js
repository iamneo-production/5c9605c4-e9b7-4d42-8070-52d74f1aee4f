import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import axios from "axios";
import {
  Formik,
  Form,
  Field,
  ErrorMessage
} from 'formik'
import * as Yup from 'yup'

import './Styles/Login.css'
import { Card } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  const[userusername,setUsername]=useState("");
  const[userpassword,setPassword]=useState("");
  const [initialValues, setInitalValues] = useState({
    username: '',
    password: ''
  });

  useEffect(() => {
    document.title = "TravelYaari  || Login";
  },[]);
  const validationSchema = Yup.object({

    email: Yup.string()
      .email(' *Invalid email format')
      .required('*Required'),
    password: Yup.string().required('*Required'),
  })
  const onSubmit = () => {
    const usercred = {
      username: userusername,
      password:userpassword
    }
    console.log(usercred)
    axios.post(`https://8080-ebadadfaceebbeceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/authenticate`, usercred).
      then((res) => {
        toast.success('Login Success', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          console.log(res)
        localStorage.setItem("token", `Bearer ${res.data.jwttoken}`)
        const username=res.data.username
        const userId =res.data.u_id
        localStorage.setItem("userid", userId);
        localStorage.setItem("username", username);
        setTimeout(() => {
          if(usercred.username==="Admin" && usercred.password==="Admin@123" )
          history.push("/admin/addvehicle")
          else
          history.push("/user/home")
        }, 3000);
      })
      .catch((err) => {
      toast.error('Invalid credentials', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    })
    

  }
  const history = useHistory()
  return <div id="loginbody">
        <video src='/videos/video1.mp4' autoPlay  loop muted />
        <Card id="logincard" style={{  width: '45%', color: 'white' }}  >
    <div className="card-header">
      <h2>Login</h2>
    </div>
    <div className="card-body"  >
      <Formik initialValues={initialValues}
        validationSchema={validationSchema}>
        <Form style={{ marginLeft: '2%' }}>
          <label htmlFor='email'>Username</label>
          <div className="col-md-12">
            <Field
              type='text'
              id='username'
              name='username'
              placeholder='Enter username'
              className='form-control'
              onInput={(e)=>{
                setUsername(e.target.value)
              }}
           
            />
            <ErrorMessage name='email' >
              {msg => <div className='error'>{msg}</div>}
            </ErrorMessage>
          </div>

          <label htmlFor='password'>Password</label>
          <div className="col-md-12">
            <Field
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              className='form-control'
              onInput={(event) => {
                setPassword(event.target.value)
              }}
             />
            <ErrorMessage name='password' >
              {msg => <div className='error'>{msg}</div>}
            </ErrorMessage>
          </div>
          <button type='submit' className='btn btn-primary' id='submitButton' onClick={() => {
            onSubmit()
          }} style={{ marginRight: '35rem', marginTop: '15px' }}>Login</button>
        </Form>
      </Formik>

      <p style={{ marginTop: '2rem' }}>
        New User?
        <button type="button" id='siginupLink' className="btn btn-link" onClick={() => { history.push("/register") }}>Signup</button>

      </p>
      <ToastContainer />
    </div>
  </Card>
  </div>


    ;

}

export default Login
