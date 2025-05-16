import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="top-banner">
        The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
      </div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <span className="logo-icon">🩺</span> Medify
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Find Doctors
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Hospitals
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Medicines
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Surgeries
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Software for Provider
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Facilities
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/my-bookings" className="nav-link my-bookings-btn">
                My Bookings
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
