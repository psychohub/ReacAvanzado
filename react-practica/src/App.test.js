
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

const mockStore = configureStore([]);
const store = mockStore({
  auth: {
    isAuthenticated: false,
    user: null,
    status: 'idle',
    error: null,
  },
 
});

test('renders login form', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const loginElement = screen.getByText(/Iniciar sesión/i);
  expect(loginElement).toBeInTheDocument();
});
