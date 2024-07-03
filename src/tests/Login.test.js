// src/tests/Login.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login';

test('renders login form', () => {
  render(<Login />);
  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Password');
  const loginButton = screen.getByRole('button', { name: 'Login' });

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});

// Write more test cases for form submission, error handling, etc.
