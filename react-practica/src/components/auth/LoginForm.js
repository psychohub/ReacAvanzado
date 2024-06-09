import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/userSlice';
import { MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    dispatch(login({ email, password, rememberMe }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <MDBInput
        wrapperClass="mb-4"
        label="Correo electrónico"
        id="form1"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Contraseña"
        id="form2"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox
          name="flexCheck"
          value=""
          id="flexCheckDefault"
          label="Recordar contraseña"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
      </div>
      {status === 'loading' && <div>Loading...</div>}
      {error && <div className="text-danger mb-3">{error}</div>}
      <MDBBtn type="submit" className="mb-4">
        Iniciar sesión
      </MDBBtn>
    </form>
  );
};

export default LoginForm;
