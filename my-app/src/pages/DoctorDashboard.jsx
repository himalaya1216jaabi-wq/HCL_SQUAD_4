import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, logout } from '../services/authService';
import '../styles/DoctorDashboard.css';

const DoctorDashboard = () => {
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
          <h2>Doctor Dashboard</h2>
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
          <h1>Welcome to Doctor Dashboard</h1>
          <p>You have successfully logged in.</p>
        </div>

        <div className="dashboard-cards">
          <div className="card">
            <h3>Patients</h3>
            <p>Manage your patients</p>
          </div>
          <div className="card">
            <h3>Appointments</h3>
            <p>View and schedule appointments</p>
          </div>
          <div className="card">
            <h3>Medical Records</h3>
            <p>Access patient medical records</p>
          </div>
          <div className="card">
            <h3>Reports</h3>
            <p>Generate reports and analytics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
