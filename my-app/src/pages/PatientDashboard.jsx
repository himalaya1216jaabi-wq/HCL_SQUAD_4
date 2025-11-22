import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, logout } from '../services/authService';
import '../styles/PatientDashboard.css';

const PatientDashboard = () => {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <h2>Patient Dashboard</h2>
        </div>
        <div className="navbar-user">
          <span className="user-greeting">Welcome, {user?.username}!</span>
          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <div className="dashboard-content">
        <div className="welcome-section">
          <h1>Welcome to Patient Dashboard</h1>
          <p>You have successfully logged in.</p>
        </div>

        <div className="dashboard-cards">
          <div className="card">
            <h3>My Appointments</h3>
            <p>View and book appointments</p>
          </div>
          <div className="card">
            <h3>Health Records</h3>
            <p>Access your medical history</p>
          </div>
          <div className="card">
            <h3>Prescriptions</h3>
            <p>View your prescriptions</p>
          </div>
          <div className="card">
            <h3>Lab Reports</h3>
            <p>Download your lab reports</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
