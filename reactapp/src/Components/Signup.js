import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom'
import {
  Formik,
  Form,
  Field,
  ErrorMessage
} from 'formik'
import * as Yup from 'yup'
function Signup() {

  const initialValues = {
    admin_user:'',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: ''
  }

  const validationSchema = Yup.object({
   admin_user: Yup.string()
      .oneOf(['admin','user'], '*Admin or User?')
      .required('Required'),
    username: Yup.string().required('*Required'),
    email: Yup.string()
      .email(' *Invalid email format')
      .required('*Required'),
    password: Yup.string().required('*Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], '*Passwords must match')
      .required('Required'),
    mobileNumber: Yup.string().max(10).required('*Required'),


  })
  const onSubmit = values => {
    console.log(values)
  }

  const history = useHistory()
  return <div className='card text-center ' style={{ marginLeft: '5rem', marginRight: '5REM' }}  >
     
     <div className="card-header" style={{backgroundColor:'#204E83',color:'white'}}>
      <h2>Register</h2>
    </div>

    <div className="card-body  " style={{backgroundColor:'gainsboro'}}>
    
      <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>

          <label htmlFor='admin_user'>Type</label>
          <div className="col-sm-4">
            <Field
              type='text'
              id='admin_user'
              name='admin_user'
              placeholder='Admin/User'
              className='form-control' />
            <ErrorMessage name='admin_user' >
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

          <label htmlFor='confirmPassword'>Confirm Password</label>
          <div className="col-sm-4">
            <Field
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              placeholder='Confirm Password'
              className='form-control' />

            <ErrorMessage name='confirmPassword' >
              {msg => <div className='error'>{msg}</div>}
            </ErrorMessage>
          </div>

          <button type='submit' className='btn btn-primary' id='submitButton' style={{ marginRight: '35rem', marginTop: '15px' }}>Submit</button>

        </Form>
      </Formik>
      <div>
        <p style={{marginTop:'2rem'}}>
          Already a user?
          <button type="button" id='siginLink' className="btn btn-link" onClick={() => { history.push("/login") }}>Login</button>
        </p>
      </div>
    </div>
  </div>;




}

export default Signup;
