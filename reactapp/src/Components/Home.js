import React,{useEffect} from 'react';
import { Button } from './Button';
import './Styles/Home.css';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history =useHistory()
  useEffect(() => {
    document.title = "TravelYaari  || Home";
  },[]);
  return (
    <div className='home-container'>
      <video src='/videos/video1.mp4' autoPlay  loop muted />
      <h1>Travel Booking Yaari</h1>
      <p>THE BEST BUS FOR THE BEST PEOPLE!!!</p>
      <br></br>
      <div>
      <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large' onClick={() => { history.push("/user/login") }}
        >
          LOG IN
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={() => { history.push("/register") }}
        >
          SIGN UP 
        </Button>
        </div>
    </div>
  );
};

export default Home;