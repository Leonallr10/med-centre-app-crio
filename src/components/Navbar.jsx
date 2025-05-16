import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#0ea5e9">
              <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
            </svg>
          </span>
          Medify
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
  );
};

export default Navbar;
