import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './LoginForm'; 
import { login } from '../../redux/userSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../../redux/userSlice', () => ({
  login: jest.fn(),
}));

describe('LoginForm', () => {
  it('debe enviar la acción de inicio de sesión cuando se envía el formulario', () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
    useSelector.mockReturnValue({ status: 'idle', error: null });

    const { getByLabelText, getByRole } = render(<LoginForm />);
    const emailInput = getByLabelText('Correo electrónico');
    const passwordInput = getByLabelText('Contraseña');
    const submitButton = getByRole('button', { name: /Iniciar sesión/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    expect(dispatchMock).toHaveBeenCalledWith(
      login({ email: 'test@example.com', password: 'password', rememberMe: false })
    );
  });
});
