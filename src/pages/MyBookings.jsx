import { useState, useEffect } from 'react';
import { getBookings, removeBooking } from '../utils/localStorage';
import '../styles/MyBookings.css';
import { FaSearch } from 'react-icons/fa';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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
    return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date);
  };

  const filteredBookings = bookings.filter(booking =>
    booking["Hospital Name"].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="my-bookings-container">
      <div className="my-bookings-header">
        <h1>My Bookings</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search By Hospital"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
      </div>

      {bookings.length === 0 ? (
        <div className="no-bookings">
          <p>You don't have any bookings yet.</p>
        </div>
      ) : (
        <div className="bookings-list">
          {filteredBookings.map((booking, index) => (
            <div key={index} className="booking-card">
              <div className="booking-left">
                <div className="center-logo">
                  <img src="https://cdn-icons-png.flaticon.com/512/4320/4320371.png" alt={`${booking["Hospital Name"]} logo`} />
                </div>
                <div className="booking-info">
                  <h3>{booking["Hospital Name"]}</h3>
                  <p className="booking-location">
                    {booking["City"]}, {booking["State"]}
                  </p>
                  <p className="booking-specialty">
                    Excellence Center for Advanced Dentistry + 1 more
                  </p>
                </div>
              </div>
              <div className="booking-right">
                <div className="booking-time-badge">
                  <div className="time">{booking.bookingTime}</div>
                  <div className="date">{formatDate(booking.bookingDate)}</div>
                </div>
                <button
                  className="cancel-booking"
                  onClick={() => handleCancelBooking(index)}
                >
                  Cancel
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
