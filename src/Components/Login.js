import React from 'react';
import { useHistory } from 'react-router-dom'

function Login() {
    const history = useHistory()

    return <div className='card text-center ' style={{ marginTop: '10rem', marginLeft: '15rem', marginRight: '15REM' }}  >
        <div className="card-header" style={{backgroundColor:'#204E83',color:'white'}}>
        
            <h2>Login</h2>
        </div>

        <div className="card-body  " style={{ paddingLeft: '15rem' , backgroundColor:'gainsboro'}} >

            
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-4">
                    <input type="email" id='email' className="form-control" />
                </div>
            </div>

            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-4">
                    <input type="password" id='password' className="form-control" />
                </div>
            </div>



            <button className='btn btn-primary' id='loginButton' style={{ marginRight: '25rem' }}>Login</button>
            <p style={{ marginRight: '25rem', marginTop: '2rem' }}>
                New User/Admin?
                <button type="button" id='signupLink' className="btn btn-link" onClick={() => { history.push("/") }}>Signup</button>
            </p>
        </div>

    </div>;




}

export default Login;