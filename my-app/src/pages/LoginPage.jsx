import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, getDashboardPath } from '../services/authService';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await loginUser(username, password);
      
      if (result.success) {
        // Redirect based on user role
        const dashboardPath = getDashboardPath(result.user);
        navigate(dashboardPath);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: Add register navigation logic here
    console.log('Register button clicked');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              disabled={loading}
            />
          </div>

          <div className="button-group">
            <button type="submit" className="btn btn-login" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <button
              type="button"
              className="btn btn-register"
              onClick={handleRegister}
              disabled={loading}
            >
              Register
            </button>
          </div>
        </form>
        <div className="demo-hint">
          <p><strong>Demo credentials:</strong></p>
          <p>Doctor: username: <strong>krishan</strong>, password: <strong>abcd</strong></p>
          <p>Patient: username: <strong>jai</strong>, password: <strong>1234</strong></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
