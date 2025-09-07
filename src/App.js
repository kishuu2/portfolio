import React, { useState, useEffect } from 'react';
import './App.css';
import Preloader from './Components/Preloader';
import Home from './Components/Home';

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
      <nav className="modern-navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <span className="brand-text">Kishan Chokwala</span>
            <span className="brand-subtitle">Portfolio</span>
          </div>
        </div>
      </nav>
      
      <Home/>
    </>
  );
}

export default App;