import axios from 'axios';

const BASE_URL = 'https://meddata-backend.onrender.com';

// Get all states
export const getStates = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/states`);
    return response.data;
  } catch (error) {
    console.error('Error fetching states:', error);
    throw error;
  }
};

// Get cities for a specific state
export const getCities = async (state) => {
  try {
    const response = await axios.get(`${BASE_URL}/cities/${state}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching cities for ${state}:`, error);
    throw error;
  }
};

// Get medical centers for a specific state and city
export const getMedicalCenters = async (state, city) => {
  try {
    const response = await axios.get(`${BASE_URL}/data?state=${state}&city=${city}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching medical centers for ${city}, ${state}:`, error);
    throw error;
  }
};
