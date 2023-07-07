import api from './api';

// Example authentication API methods
export const login = (credentials) => {
  return api.post('/login', credentials);
};

export const register = (userData) => {
  return api.post('/register', userData);
};

export const logout = () => {
  // Perform any logout logic, e.g., clearing tokens, session storage, etc.
};

// Example method to set authentication token in request headers
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};
