import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useHistory } from 'react-router-dom'
import {
  Formik,
  Form,
  Field,
  ErrorMessage
} from 'formik'
import * as Yup from 'yup'
import './Styles/Signup.css'
function Signup() {

//  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


  const initialValues = {
    useroradmin: '',
    username: '',
    email: '',
    password: '',
    confrmpassword: '',
    mobileNumber: ''
  }

  const validationSchema = Yup.object({
    useroradmin: Yup.number().nullable().required("Required"),
    username: Yup.string().required('*Required'),
    email: Yup.string()
      .email(' *Invalid email format')
      .required('*Required'),
    password: Yup.string().required('*Required').matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
    confrmpassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], '*Passwords must match')
      .required('Required'),
    mobileNumber: Yup.string().matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ).required('*Required').min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits'),


  })
  /*const onSubmit = async(data,onSubmitProps) => {
     
      try{
        const data1={
      useroradmin:data.useroradmin ,
     username:data.username ,
     email: data.email,
     password: data.password,
     mobileNumber: data.mobileNumber
 }
      const res = await axios({
          method:'POST',
          url:'https://8080-ebadadfaceebbeceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/user/signup',
          data: data1
      });
      console.log(res);
      alert("Signup successful !")
  }catch(err){
      alert("signup failed !!")
  }
  
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
  }*/
  const onSubmit=(data,onSubmitProps) => {
    
    const data1={
      useroradmin:data.useroradmin ,
     username:data.username ,
     email: data.email,
     password: data.password,
     mobileNumber: data.mobileNumber
 }
 console.log(data1);
    axios.post('https://8080-ebadadfaceebbeceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/user/signup',data1).then(
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
    document.title = "TravelYaari  ||  Registration";
  },[]);
  const history = useHistory()
  return <div className='card text-center ' style={{ marginLeft: '5rem', marginRight: '5REM' }}  >

    <div className="card-header" style={{ backgroundColor: '#204E83', color: 'white' }}>
      <h2>Register</h2>
    </div>

    <div className="card-body  " style={{ backgroundColor: 'gainsboro' }}>

      <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>

          <label htmlFor='useroradmin'>Type</label>
          <div className="col-sm-4">
            <Field name="useroradmin" as="select" className="form-select">
              <option value={null}></option>
              <option value={0}>Admin</option>
              <option value={1}>User</option>
            </Field>
            <ErrorMessage name='useroradmin' >
              {msg => <div className='error'>{msg}</div>}
            </ErrorMessage>
          </div>

          <label htmlFor='email'>Email</label>
          <div className="col-sm-4">
            <Field
              type='text'
              id='email'
              name='email'
              placeholder='Enter email'
              className='form-control' />
            <ErrorMessage name='email' >
              {msg => <div className='error'>{msg}</div>}
            </ErrorMessage>
          </div>

          <label htmlFor='username'>User Name</label>
          <div className="col-sm-4">
            <Field
              type='text'
              id='username'
              name='username'
              placeholder='Enter username'
              className='form-control' />

            <ErrorMessage name='username'  >
              {msg => <div className='error'>{msg}</div>}
            </ErrorMessage>
          </div>

          <label htmlFor='mobileNumber'>Mobile Number</label>
          <div className="col-sm-4">
            <Field
              type='text'
              id='mobileNumber'
              name='mobileNumber'
              placeholder='Enter mobileNumber'
              className='form-control' />
            <ErrorMessage name='mobileNumber' >
              {msg => <div className='error'>{msg}</div>}
            </ErrorMessage>
          </div>

          <label htmlFor='password'>Password</label>
          <div className="col-sm-4">
            <Field
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              className='form-control' />
            <ErrorMessage name='password' >
              {msg => <div className='error'>{msg}</div>}
            </ErrorMessage>
          </div>

          <label htmlFor='confrmpassword'>Confirm Password</label>
          <div className="col-sm-4">
            <Field
              type='password'
              id='confrmpassword'
              name='confrmpassword'
              placeholder='Confirm Password'
              className='form-control' />

            <ErrorMessage name='confrmpassword' >
              {msg => <div className='error'>{msg}</div>}
            </ErrorMessage>
          </div>

          <button type='submit' className='btn btn-primary' id='submitButton' style={{ marginRight: '60%', marginTop: '15px' }}>Submit</button>

        </Form>
      </Formik>
      <div>
        <p style={{ marginTop: '2rem' }}>
          Already a user?
          <button type="button" id='siginLink' className="btn btn-link" onClick={() => { history.push("/login") }}>Login</button>
        </p>
      </div>
    </div>
  </div>;




}

export default Signup;