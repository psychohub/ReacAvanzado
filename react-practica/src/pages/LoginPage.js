import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import { routes } from '../components/routes/links';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuthenticated, status, error } = useSelector((state) => state.auth);

  const from = location.state?.from?.pathname || routes.adverts;

  useEffect(() => {
    if (isAuthenticated) {
      console.log('User is authenticated, navigating to:', from);
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleLogin = (credentials) => {
    dispatch(login(credentials));
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={handleLogin} />
      {status === 'loading' && <div>Loading...</div>}
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
};

export default LoginPage;
