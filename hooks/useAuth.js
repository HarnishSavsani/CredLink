import { useState, useEffect } from 'react';
import { login, register, logout, getUser } from '../services/auth';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
        setIsLoading(false);
      } catch (error) {
        // Handle error
        console.error('Error fetching user:', error);
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogin = async (credentials) => {
    try {
      const userData = await login(credentials);
      setUser(userData);
    } catch (error) {
      // Handle error
      console.error('Error logging in:', error);
    }
  };

  const handleRegister = async (userInfo) => {
    try {
      const userData = await register(userInfo);
      setUser(userData);
    } catch (error) {
      // Handle error
      console.error('Error registering:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      // Handle error
      console.error('Error logging out:', error);
    }
  };

  return {
    user,
    isLoading,
    handleLogin,
    handleRegister,
    handleLogout,
  };
};

export default useAuth;
