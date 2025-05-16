import React from 'react';
import '../styles/PatientCaring.css';

const PatientCaring = () => {
  return (
    <div className="patient-caring-section">
      <div className="patient-caring-container">
        <div className="patient-caring-image">
          <img 
            src="https://img.freepik.com/free-photo/doctor-talking-female-patient_23-2148968172.jpg" 
            alt="Doctor with Patient" 
          />
        </div>
        
        <div className="patient-caring-content">
          <div className="section-tag">
            <span className="tag-icon">🩺</span>
            <span className="tag-text">Easy Consultation Process</span>
          </div>
          
          <h2 className="section-title">
            Patient <span className="highlight">Caring</span>
          </h2>
          
          <p className="section-description">
            Our goal is to deliver quality of care to patients, respectfully and 
            compassionately. We are committed to providing each patient with a unique 
            experience that is tailored to their individual needs.
          </p>
          
          <div className="feature-list">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span className="feature-text">Stay Updated About Your Health</span>
            </div>
            
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span className="feature-text">Check Your Medical History</span>
            </div>
            
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span className="feature-text">Manage Your Appointments</span>
            </div>
          </div>
          
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default PatientCaring;
