import React, { useState, useEffect } from 'react';
import './App.css';
import Preloader from './Components/Preloader';
import Home from './Components/Home';
import cv from "./images/chokwalakishan.pdf";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (adjust as needed)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
    <>
      {isLoading && <Preloader />}
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <p className="navbar-brand"><span id='logo' className='text-danger'>𝓓</span>
          <span className='text-light' id='logo'>𝓲</span>
          <span className='text-danger' id='logo'>𝓪</span>
          <span className='text-light' id='logo'>𝓶</span>
          <span className='text-danger' id='logo'>𝓸</span>
          <span className='text-light' id='logo'>𝓷</span>
          <span className='text-danger' id='logo'>𝓭</span></p>
          
            <form className="d-flex">
              <a href={cv} className="btn btn-danger" download={cv} id='btn' type="button">Download CV</a>
            </form>
          
        </div>
      </nav>
      
      <Home/>
    </>
  );
}

export default App;
