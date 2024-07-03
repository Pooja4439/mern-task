// src/services/authService.js
import api from './api';

const registerUser = async (userData) => {
  try {
    const response = await api.post('/users/register', userData);
    return response.data.token;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
};

const loginUser = async (userData) => {
  try {
    const response = await api.post('/users/login', userData);
    return response.data.token;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
};

const authAPI = {
  registerUser,
  loginUser,
};

export default authAPI;
