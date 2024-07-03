// src/components/Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import authAPI from '../services/authService';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await authAPI.loginUser(formData);
      localStorage.setItem('token', token);
      history.push('/dashboard');
    } catch (error) {
      console.error(error.message);
    }
  };
  // src/components/Login.js
// Component for user login form
const Login = () => {
    // State for form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    // Function to handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Make API call to login user
        const token = await authAPI.loginUser({ email, password });
        // Store token in localStorage
        localStorage.setItem('token', token);
        // Redirect user to dashboard
        history.push('/dashboard');
      } catch (error) {
        console.error(error.message);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        {/* Form inputs and submit button */}
      </form>
    );
  };
  

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
