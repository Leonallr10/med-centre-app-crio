// Get bookings from localStorage
export const getBookings = () => {
  const bookings = localStorage.getItem('bookings');
  return bookings ? JSON.parse(bookings) : [];
};

// Save bookings to localStorage
export const saveBooking = (booking) => {
  const bookings = getBookings();
  bookings.push(booking);
  localStorage.setItem('bookings', JSON.stringify(bookings));
};

// Remove a booking from localStorage
export const removeBooking = (index) => {
  const bookings = getBookings();
  bookings.splice(index, 1);
  localStorage.setItem('bookings', JSON.stringify(bookings));
};
