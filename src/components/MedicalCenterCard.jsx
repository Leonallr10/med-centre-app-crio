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
      <div className="center-logo">
        <img src={center.logo || defaultLogo} alt={`${center["Hospital Name"]} logo`} />
      </div>

      <div className="center-details">
        <h3 className="center-name">{center["Hospital Name"]}</h3>
        <div className="center-location">
          <span className="location-icon">📍</span>
          <span className="location-text">{center["Address"]}, {center["City"]}, {center["State"]} {center["ZIP Code"]}</span>
        </div>
        <div className="center-specialties">
          <span className="specialty-label">Type:</span>
          <span className="specialty-text">{center["Hospital Type"] || 'General Hospital'}</span>
        </div>
        <div className="center-timing">
          <span className="timing-icon">🕒</span>
          <span className="timing-text">Open 24 hours</span>
        </div>
      </div>

      <div className="center-actions">
        <div className="center-rating">
          <span className={`rating-badge ${parseInt(center["Hospital overall rating"]) >= 4 ? 'high' : 'medium'}`}>
            {center["Hospital overall rating"] || 'N/A'}
          </span>
        </div>

        <button
          className="book-appointment-btn"
          onClick={toggleBooking}
          id={`book-btn-${center["Provider ID"]}`}
        >
          Book FREE Center Visit
        </button>

        <button className="view-profile-btn">
          View Profile
        </button>
      </div>

      {showBooking && (
        <BookingCalendar center={center} onClose={toggleBooking} />
      )}
    </div>
  );
};

export default MedicalCenterCard;
