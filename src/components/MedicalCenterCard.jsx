import { useState } from 'react';
import BookingCalendar from './BookingCalendar';
import '../styles/MedicalCenterCard.css';

const MedicalCenterCard = ({ center }) => {
  const [showBooking, setShowBooking] = useState(false);

  const toggleBooking = () => {
    setShowBooking(!showBooking);
  };

  // Default logo if not provided
  const defaultLogo = "https://cdn-icons-png.flaticon.com/512/4320/4320371.png";

  return (
    <div className="medical-center-card">
      <div className="card-header">
        <div className="center-logo">
          <img src={center.logo || defaultLogo} alt={`${center["Hospital Name"]} logo`} />
        </div>

        <div className="center-details">
          <h3 className="center-name">{center["Hospital Name"]}</h3>
          <div className="center-location">
            <span className="location-text">{center["City"]}, {center["State"]}</span>
          </div>
          <div className="center-specialties">
            <span className="specialty-text">Excellence Center for Advanced Dentistry + 1 more</span>
          </div>
          <div className="center-consultation">
            <span className="free-tag">FREE</span>
            <span className="consultation-text">Book Consultation fee at clinic</span>
          </div>
        </div>

        <div className="center-availability">
          <span className="availability-tag">Available Today</span>
          <button
            className="book-appointment-btn"
            onClick={toggleBooking}
            id={`book-btn-${center["Provider ID"]}`}
          >
            Book FREE Center Visit
          </button>
        </div>
      </div>

      {showBooking && (
        <BookingCalendar center={center} onClose={toggleBooking} />
      )}
    </div>
  );
};

export default MedicalCenterCard;
