import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStates, getCities } from '../services/api';
import { FaSearch } from 'react-icons/fa';
import { FaHospital, FaUserMd, FaAmbulance } from 'react-icons/fa';
import { GiMicroscope, GiMedicines } from 'react-icons/gi';
import '../styles/SearchSection.css';

const SearchSection = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Hospitals');

  const navigate = useNavigate();

  const categories = [
    { name: 'Doctors', icon: <FaUserMd /> },
    { name: 'Labs', icon: <GiMicroscope /> },
    { name: 'Hospitals', icon: <FaHospital /> },
    { name: 'Medical Store', icon: <GiMedicines /> },
    { name: 'Ambulance', icon: <FaAmbulance /> },
  ];

  // Fetch states on component mount
  useEffect(() => {
    const fetchStates = async () => {
      try {
        setLoading(true);
        const data = await getStates();
        setStates(data);
      } catch (error) {
        console.error('Error fetching states:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStates();
  }, []);

  // Fetch cities when a state is selected
  useEffect(() => {
    if (selectedState) {
      const fetchCities = async () => {
        try {
          setLoading(true);
          const data = await getCities(selectedState);
          setCities(data);
        } catch (error) {
          console.error('Error fetching cities:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchCities();
    } else {
      setCities([]);
    }
  }, [selectedState]);

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setStateDropdownOpen(false);
    setSelectedCity('');
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setCityDropdownOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (selectedState && selectedCity) {
      navigate('/search', {
        state: {
          state: selectedState,
          city: selectedCity
        }
      });
    }
  };

  return (
    <div className="search-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Skip the travel! Find Online</h1>
          <h2>Medical Centers</h2>
          <p>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
          <button className="find-centers-btn">Find Centers</button>
        </div>
        <div className="hero-image">
          {/* Hero image is added via CSS in SearchSection.css */}
        </div>
      </div>

      <div className="search-container">
        <div className="search-form-wrapper">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-inputs">
              <div id="state" className="search-input">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  className="input-field"
                  placeholder="State"
                  value={selectedState}
                  onClick={() => setStateDropdownOpen(!stateDropdownOpen)}
                  readOnly
                />
                {stateDropdownOpen && (
                  <ul className="dropdown-list">
                    {states.map((state, index) => (
                      <li
                        key={index}
                        onClick={() => handleStateSelect(state)}
                      >
                        {state}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div id="city" className="search-input">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  className="input-field"
                  placeholder="City"
                  value={selectedCity}
                  onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                  readOnly
                />
                {cityDropdownOpen && (
                  <ul className="dropdown-list">
                    {cities.map((city, index) => (
                      <li
                        key={index}
                        onClick={() => handleCitySelect(city)}
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button
                type="submit"
                id="searchBtn"
                className="search-button"
                disabled={!selectedState || !selectedCity}
              >
                <FaSearch style={{ marginRight: '5px' }} /> Search
              </button>
            </div>
          </form>
        </div>

        <div className="category-section">
          <p className="category-title">You may be looking for</p>
          <div className="categories-wrapper">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`category-card ${activeCategory === category.name ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.name)}
              >
                <div className="category-icon">{category.icon}</div>
                <span className="category-name">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
