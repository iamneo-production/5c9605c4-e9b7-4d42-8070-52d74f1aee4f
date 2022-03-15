import React from 'react';
import { useHistory } from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {
  Formik,
  Form,
  Field,
  ErrorMessage
} from 'formik'
import * as Yup from 'yup'
import './Styles/Login.css'
function Login() {

  const initialValues = {
    
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
   
    email: Yup.string()
      .email(' *Invalid email format')
      .required('*Required'),
    password: Yup.string().required('*Required'),
 })
  const onSubmit = values => {
    console.log(values)
    if(values.email==="admin@gmail.com" && values.password==="Admin@123"){
      history.push('/admin/addvehicle')
    }
    else if(values.email!=="admin@gmail.com" && values.password!=="Admin@123")
   history.push('/user/home')
    toast.error('Invalid credentials', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
     
  }

  const history = useHistory()
  return <div id="loginbody"><div className='card text-center ' style={{ marginLeft: '25rem', marginRight: '5REM' , opacity: '0.9',width:'50%'}}  >
        <div className="card-header" style={{backgroundColor:'black',color:'grey'}}>
        
            <h2>Login</h2>
        </div>

        <div className="card-body"  style={{ paddingLeft: '5rem' , backgroundColor:'#202020',color:'grey'}} >
            
           <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
           <Form>
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
          <button type='submit' className='btn btn-primary' id='submitButton'  style={{ marginRight: '35rem', marginTop: '15px' }}>Login</button>
           </Form>
          </Formik>
       
        <p style={{marginTop:'2rem'}}>
          New User?
          <button type="button" id='siginupLink' className="btn btn-link" onClick={() => { history.push("/register") }}>Signup</button>
         
        </p>
        <ToastContainer />
    </div>
    </div>
  </div>;
            
}

export default Login