import React,{useEffect,useState} from 'react'
import AdminDashboard from './AdminDashboard'
import './Styles/Usersprofile.css'
import {Card} from 'react-bootstrap'
import {Table} from 'react-bootstrap'
import axios from 'axios'
function UsersProfile(){
    const [posts,setPost]=useState([])
    useEffect(()=>{
        axios.get("https://8080-decaafdbcaceffbfcffabcbabdadaaeecfcabcb.examlyiopb.examly.io/user/allUsers").then((res)=>{
        console.log(res)
        setPost(res.data)})
        .catch((err)=>
        console.log(err))
    },[])
    return<div >
        <AdminDashboard/>
        <Card id="usersbody">
            <Card.Body id="h1">
            <Table striped bordered hover  variant="light">
                <thead>
                    <tr>
                    <th>User Name</th>
                    <th>Email id</th>
                    <th>Mobile number</th>
                    <th>Password</th>
                    </tr>
                </thead>
                <tbody>
               
                    {
                        posts?.map((post)=>{
                            return(
                                <tr>   
                                <td>{post.username}</td>
                                <td>{post.email}</td>
                                <td>{post.mobileNumber}</td>
                                <td>{post.password}</td>
                                </tr>
                            )
                        })
                    }
             
                </tbody>

            </Table>
            </Card.Body>
        </Card>
    </div>
}
export default UsersProfile;