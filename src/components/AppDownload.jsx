import React from 'react';
import '../styles/AppDownload.css';

const AppDownload = () => {
  return (
    <div className="app-download-section">
      <div className="app-download-container">
        <div className="app-image">
          <img 
            src="https://img.freepik.com/free-psd/smartphone-mockup_1310-812.jpg" 
            alt="Medify App" 
          />
        </div>
        
        <div className="app-content">
          <h2 className="app-title">
            Download the <span className="highlight">Medify</span> App
          </h2>
          
          <p className="app-description">
            Get the full functionality of the app
          </p>
          
          <div className="app-features">
            <div className="app-feature">
              <span className="feature-icon">✓</span>
              <span className="feature-text">Book appointments</span>
            </div>
            <div className="app-feature">
              <span className="feature-icon">✓</span>
              <span className="feature-text">Video consultations</span>
            </div>
            <div className="app-feature">
              <span className="feature-icon">✓</span>
              <span className="feature-text">Health records</span>
            </div>
            <div className="app-feature">
              <span className="feature-icon">✓</span>
              <span className="feature-text">Medicine reminders</span>
            </div>
          </div>
          
          <div className="app-buttons">
            <a href="#" className="app-button google-play">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" 
                alt="Google Play" 
              />
            </a>
            <a href="#" className="app-button app-store">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" 
                alt="App Store" 
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
