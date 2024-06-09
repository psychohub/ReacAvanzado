import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAuthorizationHeader,
  removeAuthorizationHeader,
} from '../../api/api';
import { login, logout } from '../../redux/userSlice';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, status, error } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(login({ token }));
    }
  }, [dispatch]);

  useEffect(() => {
    if (user && user.token) {
      setAuthorizationHeader(user.token);
    } else {
      removeAuthorizationHeader();
    }
  }, [user]);

  const performLogin = (credentials) => {
    dispatch(login(credentials));
  };

  const performLogout = () => {
    dispatch(logout());
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        status,
        error,
        performLogin,
        performLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
