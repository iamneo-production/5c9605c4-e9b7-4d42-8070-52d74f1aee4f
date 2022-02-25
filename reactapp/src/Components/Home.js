import React,{useEffect} from 'react'
import './Styles/Home.css'
import { useHistory } from 'react-router-dom'
function Home(){
  useEffect(() => {
    document.title = "TravelYaari ";
  },[]);
  const history = useHistory()
    return(
      
        <div id="homebody" >
      <div className='card'id="homecard">
        <h1> Welcome to Travel Yaari</h1>
        <h3>The best Bus for the best People!!!</h3>
        
          <button  id="getstarted" type="button" onClick={() => { history.push("/Register") }}>Get Started!!</button>
      
      </div>
    </div>
    );
}

export default Home;