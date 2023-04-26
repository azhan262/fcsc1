import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';

function App() {

  const [showLandingPage, setShowLandingPage] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setShowLandingPage(true)
    },3000)
  },[])
  return (
    <div className="container">
      {showLandingPage == false ? 
      <div className = 'splash-screen'>
      <div />
      <div>
        <img src = "/images/splash-screen-logo.png" alt = "logo" />
        <p>Alsaray</p>
      </div>
      <div className = 'copyright-text'>
        <p style={{marginRight:'10px'}} >© Copyright by</p>
        <img src = '/images/copyright.png' alt = 'copyright logo' />
      </div>
      </div>
      :
      <LandingPage />
      }
    </div>
  );
}

export default App;
