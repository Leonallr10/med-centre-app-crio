import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getMedicalCenters } from '../services/api';
import MedicalCenterCard from '../components/MedicalCenterCard';
import '../styles/SearchResults.css';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [medicalCenters, setMedicalCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get state and city from location state
  const { state, city } = location.state || {};

  useEffect(() => {
    // If state or city is missing, redirect to home page
    if (!state || !city) {
      navigate('/');
      return;
    }

    const fetchMedicalCenters = async () => {
      try {
        setLoading(true);
        const data = await getMedicalCenters(state, city);
        setMedicalCenters(data);
      } catch (error) {
        console.error('Error fetching medical centers:', error);
        setError('Failed to fetch medical centers. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMedicalCenters();
  }, [state, city, navigate]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading medical centers...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="search-results-page">
      <div className="search-results-header">
        <div className="search-results-title">
          <h1>{medicalCenters.length} medical centers available in {city.toLowerCase()}</h1>
        </div>

        <div className="appointment-promo">
          <div className="promo-content">
            <h3>Get a FREE Appointment</h3>
            <p>Book Now for Free</p>
          </div>
          <button className="book-now-btn">Book Now</button>
        </div>
      </div>

      {medicalCenters.length === 0 ? (
        <div className="no-results">
          <p>No medical centers found in {city}, {state}.</p>
          <button onClick={() => navigate('/')}>Go Back</button>
        </div>
      ) : (
        <div className="medical-centers-list">
          {medicalCenters.map((center, index) => (
            <MedicalCenterCard key={index} center={center} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
