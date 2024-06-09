import api from '../api/api';

export const loginUser = async ({ email, password }) => {
  try {
    console.log('Sending login request with email:', email);
    const response = await api.post('/api/auth/login', { email, password });
    console.log('Login response received:', response);

    if (response.status >= 200 && response.status < 300) {
      console.log('Login successful, access token:', response.data.accessToken);
      return { accessToken: response.data.accessToken };
    } else {
      const error = new Error('Error en la respuesta del servidor');
      error.response = response;
      console.error('Server response error:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.message);
    throw error;
  }
};
