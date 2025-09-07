import React from 'react';
import '../Styles/Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="modern-loader">
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
      </div>
      <div className="loader-text">
        Kishan Chokwala
        <div className="loader-subtitle">Portfolio Loading...</div>
      </div>
    </div>
  );
};

export default Preloader;