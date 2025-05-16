import { useState, useEffect } from 'react';
import { saveBooking, getBookings } from '../utils/localStorage';
import '../styles/BookingCalendar.css';

const BookingCalendar = ({ center, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [availableDates, setAvailableDates] = useState([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookedSlots, setBookedSlots] = useState({});

  // Load booked slots from localStorage
  useEffect(() => {
    const loadBookedSlots = () => {
      const existingBookings = getBookings();
      const slots = {};

      // Group bookings by date and center
      existingBookings.forEach(booking => {
        const key = `${booking.bookingDate}-${booking["Provider ID"]}`;
        if (!slots[key]) {
          slots[key] = [];
        }
        slots[key].push(booking.bookingTime);
      });

      setBookedSlots(slots);
    };

    loadBookedSlots();

    // Add event listener for storage changes
    const handleStorageChange = () => {
      loadBookedSlots();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [center]);

  // Generate available dates (next 7 days)
  useEffect(() => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const formattedDate = date.toISOString().split('T')[0];
      dates.push({
        date: formattedDate,
        available: Math.floor(Math.random() * 10) + 5 // Random number of available slots (5-15)
      });
    }

    setAvailableDates(dates);
    setSelectedDate(dates[0].date); // Select today by default
  }, []);

  // Check if a time slot is already booked
  const isSlotBooked = (date, time) => {
    const key = `${date}-${center["Provider ID"]}`;
    return bookedSlots[key] && bookedSlots[key].includes(time);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(''); // Reset time when date changes
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      const booking = {
        ...center,
        bookingDate: selectedDate,
        bookingTime: selectedTime
      };

      saveBooking(booking);

      // Update booked slots in the current component
      setBookedSlots(prevSlots => {
        const key = `${selectedDate}-${center["Provider ID"]}`;
        const updatedSlots = { ...prevSlots };

        if (!updatedSlots[key]) {
          updatedSlots[key] = [];
        }

        updatedSlots[key].push(selectedTime);
        return updatedSlots;
      });

      setBookingConfirmed(true);

      // Close the booking form after a delay
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  // Check if date is today
  const isToday = (dateString) => {
    const today = new Date();
    const date = new Date(dateString);
    return date.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0);
  };

  // Generate time slots
  const morningSlots = ['9:00 AM', '10:00 AM', '11:00 AM'];
  const afternoonSlots = ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'];
  const eveningSlots = ['4:00 PM', '5:00 PM', '6:00 PM'];

  return (
    <div className="booking-calendar">
      {bookingConfirmed ? (
        <div className="booking-confirmation">
          <h3>Booking Confirmed!</h3>
          <p>Your appointment has been scheduled for {formatDate(selectedDate)} at {selectedTime}.</p>
        </div>
      ) : (
        <>
          <h3>Book an Appointment</h3>

          <div className="date-selector">
            <div className="date-navigation">
              <button className="nav-button prev">
                <span>&#10094;</span>
              </button>

              <div className="date-tabs">
                {availableDates.map((dateObj) => (
                  <div
                    key={dateObj.date}
                    className={`date-tab ${selectedDate === dateObj.date ? 'selected' : ''}`}
                    onClick={() => handleDateSelect(dateObj.date)}
                  >
                    <div className="date-label">
                      {isToday(dateObj.date) ? 'Today' :
                        dateObj.date === availableDates[1]?.date ? 'Tomorrow' :
                        formatDate(dateObj.date)}
                    </div>
                    <div className="slots-available">
                      {dateObj.available} Slots Available
                    </div>
                  </div>
                ))}
              </div>

              <button className="nav-button next">
                <span>&#10095;</span>
              </button>
            </div>
          </div>

          <div className="time-sections-container">
            <div className="time-section">
              <div className="time-section-header">Morning</div>
              <div className="time-slots">
                {morningSlots.map((time) => {
                  const booked = isSlotBooked(selectedDate, time);
                  return (
                    <div
                      key={time}
                      className={`time-slot ${selectedTime === time ? 'selected' : ''} ${booked ? 'booked' : ''}`}
                      onClick={() => !booked && handleTimeSelect(time)}
                      title={booked ? 'This slot is already booked' : ''}
                    >
                      {time}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="time-section">
              <div className="time-section-header">Afternoon</div>
              <div className="time-slots">
                {afternoonSlots.map((time) => {
                  const booked = isSlotBooked(selectedDate, time);
                  return (
                    <div
                      key={time}
                      className={`time-slot ${selectedTime === time ? 'selected' : ''} ${booked ? 'booked' : ''}`}
                      onClick={() => !booked && handleTimeSelect(time)}
                      title={booked ? 'This slot is already booked' : ''}
                    >
                      {time}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="time-section">
              <div className="time-section-header">Evening</div>
              <div className="time-slots">
                {eveningSlots.map((time) => {
                  const booked = isSlotBooked(selectedDate, time);
                  return (
                    <div
                      key={time}
                      className={`time-slot ${selectedTime === time ? 'selected' : ''} ${booked ? 'booked' : ''}`}
                      onClick={() => !booked && handleTimeSelect(time)}
                      title={booked ? 'This slot is already booked' : ''}
                    >
                      {time}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="booking-actions">
            <button
              className="confirm-button"
              onClick={handleBooking}
              disabled={!selectedDate || !selectedTime}
            >
              Confirm Booking
            </button>
            <button
              className="cancel-button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingCalendar;
