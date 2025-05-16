import { useState, useEffect } from 'react';
import { saveBooking } from '../utils/localStorage';
import '../styles/BookingCalendar.css';

const BookingCalendar = ({ center, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [availableDates, setAvailableDates] = useState([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  
  // Generate available dates (next 7 days)
  useEffect(() => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const formattedDate = date.toISOString().split('T')[0];
      dates.push(formattedDate);
    }
    
    setAvailableDates(dates);
    setSelectedDate(dates[0]); // Select today by default
  }, []);
  
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
            <h4>Select Date</h4>
            <div className="dates">
              {availableDates.map((date) => (
                <div 
                  key={date}
                  className={`date-option ${selectedDate === date ? 'selected' : ''}`}
                  onClick={() => handleDateSelect(date)}
                >
                  {isToday(date) ? (
                    <p>Today</p>
                  ) : (
                    formatDate(date)
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="time-selector">
            <h4>Select Time</h4>
            
            <div className="time-section">
              <p>Morning</p>
              <div className="time-slots">
                {morningSlots.map((time) => (
                  <div 
                    key={time}
                    className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="time-section">
              <p>Afternoon</p>
              <div className="time-slots">
                {afternoonSlots.map((time) => (
                  <div 
                    key={time}
                    className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="time-section">
              <p>Evening</p>
              <div className="time-slots">
                {eveningSlots.map((time) => (
                  <div 
                    key={time}
                    className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </div>
                ))}
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
