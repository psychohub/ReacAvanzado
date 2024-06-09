import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
console.log('API_BASE_URL:', API_BASE_URL);
const api = axios.create({
  baseURL: API_BASE_URL,
});

export const setAuthorizationHeader = (token) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const removeAuthorizationHeader = () => {
  delete api.defaults.headers.common['Authorization'];
};

export const getAdverts = async () => {
  try {
    const response = await api.get('api/v1/adverts');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default api;
