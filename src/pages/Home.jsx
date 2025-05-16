import SearchSection from '../components/SearchSection';
import Specializations from '../components/Specializations';
import DoctorCarousel from '../components/DoctorCarousel';
import PatientCaring from '../components/PatientCaring';
import LatestNews from '../components/LatestNews';
import Statistics from '../components/Statistics';
import FAQ from '../components/FAQ';
import AppDownload from '../components/AppDownload';
import Footer from '../components/Footer';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <SearchSection />
      <Specializations />
      <DoctorCarousel />
      <PatientCaring />

      <div className="offers-section">
        <div className="offers-container">
          <div className="offer-card">
            <div className="offer-content">
              <h3>Get Rs 100 OFF</h3>
              <p>On Doctor Consultation</p>
              <button className="book-now-btn">Book Now</button>
            </div>
            <div className="offer-image">
              <img src="https://img.freepik.com/free-photo/doctor-patient-medical-consultation_23-2149063168.jpg" alt="Doctor Consultation" />
            </div>
          </div>

          <div className="offer-card highlight">
            <div className="offer-content">
              <h3>FLAT 30% OFF</h3>
              <p>ON VIDEO CONSULTATION</p>
              <div className="promo-code">USE CODE: FIRST30</div>
              <div className="promo-text">ZOHO1011</div>
            </div>
            <div className="offer-image">
              <img src="https://img.freepik.com/free-photo/online-doctor-consultation-laptop_23-2149328682.jpg" alt="Video Consultation" />
            </div>
          </div>

          <div className="offer-card">
            <div className="offer-content">
              <h3>Get Rs 100 OFF</h3>
              <p>On Doctor Consultation</p>
              <button className="book-now-btn">Book Now</button>
            </div>
            <div className="offer-image">
              <img src="https://img.freepik.com/free-photo/doctor-patient-medical-consultation_23-2149063168.jpg" alt="Doctor Consultation" />
            </div>
          </div>
        </div>

        <div className="carousel-dots">
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
        </div>
      </div>

      <LatestNews />
      <Statistics />
      <FAQ />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Home;
