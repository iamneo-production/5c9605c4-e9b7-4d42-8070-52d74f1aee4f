import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import { Navbar,Nav } from 'react-bootstrap'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faHome } from "@fortawesome/free-solid-svg-icons";
class Navigationbar extends React.Component{
render(){
return(
<div>

<div className="row">
<div className="col-md-12">
<Router>
    
    
    
<Navbar className='color' variant="light" >

<Navbar.Brand href="#home"></Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">

<Nav.Link href="/"><h2 className='homecolor'>Travel yaari</h2></Nav.Link>
{/*<a href="/user/home"><FontAwesomeIcon icon={faHome} size="2x" /></a>*/}
<Nav.Link class="nav-links" href="/"><h2 className='homecolor'> Home</h2></Nav.Link>

<Nav.Link class="nav-links" href="/"><h2 className='homecolor'> Dasboard</h2></Nav.Link>
<Nav.Link class="nav-links"href="/"><h2 className='homecolor'>My booking</h2></Nav.Link>

</Nav>

</Navbar.Collapse>
</Navbar>
<div className='image'>

</div>

<br />

</Router>
</div>
</div>
</div>
)  
}
}
export default Navigationbar;








