import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <span className="logo-icon">🩺</span>
            <span className="logo-text">Medify</span>
          </div>
          
          <div className="footer-columns">
            <div className="footer-column">
              <h3 className="column-title">About Us</h3>
              <ul className="footer-links">
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/">Careers</Link></li>
                <li><Link to="/">Press</Link></li>
                <li><Link to="/">Contact Us</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="column-title">For Patients</h3>
              <ul className="footer-links">
                <li><Link to="/">Search for Doctors</Link></li>
                <li><Link to="/">Search for Clinics</Link></li>
                <li><Link to="/">Health App</Link></li>
                <li><Link to="/">Articles</Link></li>
                <li><Link to="/">Testimonials</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="column-title">For Doctors</h3>
              <ul className="footer-links">
                <li><Link to="/">Appointments</Link></li>
                <li><Link to="/">Chat</Link></li>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/">Register</Link></li>
                <li><Link to="/">Doctor Blog</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="column-title">For Hospitals</h3>
              <ul className="footer-links">
                <li><Link to="/">Insta by Practo</Link></li>
                <li><Link to="/">Qikwell by Practo</Link></li>
                <li><Link to="/">Practo Profile</Link></li>
                <li><Link to="/">Practo Reach</Link></li>
                <li><Link to="/">Practo Drive</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="column-title">More</h3>
              <ul className="footer-links">
                <li><Link to="/">Help</Link></li>
                <li><Link to="/">Developers</Link></li>
                <li><Link to="/">Privacy Policy</Link></li>
                <li><Link to="/">Terms & Conditions</Link></li>
                <li><Link to="/">Healthcare Directory</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook">FB</i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter">TW</i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram">IG</i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin">LI</i>
            </a>
          </div>
          
          <div className="copyright">
            <p>Copyright © {currentYear} Medify Services, Inc. All rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
