import { useState, useEffect } from 'react';
import { getBookings, removeBooking } from '../utils/localStorage';
import '../styles/MyBookings.css';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  
  useEffect(() => {
    // Load bookings from localStorage
    const loadBookings = () => {
      const savedBookings = getBookings();
      setBookings(savedBookings);
    };
    
    loadBookings();
    
    // Add event listener for storage changes
    const handleStorageChange = () => {
      loadBookings();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  const handleCancelBooking = (index) => {
    removeBooking(index);
    setBookings(getBookings());
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };
  
  return (
    <div className="my-bookings-container">
      <h1>My Bookings</h1>
      
      {bookings.length === 0 ? (
        <div className="no-bookings">
          <p>You don't have any bookings yet.</p>
        </div>
      ) : (
        <div className="bookings-list">
          {bookings.map((booking, index) => (
            <div key={index} className="booking-card">
              <div className="booking-info">
                <h3>{booking["Hospital Name"]}</h3>
                <p className="booking-address">
                  {booking["Address"]}, {booking["City"]}, {booking["State"]} {booking["ZIP Code"]}
                </p>
                <div className="booking-details">
                  <p className="booking-date">
                    <strong>Date:</strong> {formatDate(booking.bookingDate)}
                  </p>
                  <p className="booking-time">
                    <strong>Time:</strong> {booking.bookingTime}
                  </p>
                </div>
              </div>
              <div className="booking-actions">
                <button 
                  className="cancel-booking"
                  onClick={() => handleCancelBooking(index)}
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
