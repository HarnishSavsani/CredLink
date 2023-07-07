import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your API base URL

// Create an Axios instance with base URL
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example API methods
export const fetchLoans = () => {
  return api.get('/loans');
};

export const createLoan = (loanData) => {
  return api.post('/loans', loanData);
};

// Export the Axios instance for custom configurations if needed
export default api;
