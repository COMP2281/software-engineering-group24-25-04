
import React from 'react';
import icon from '../Assets/icon.jpg'; 
import './Profile.css';

const Profile = ({ goToLogin, goToDashboard }) => {
    
  const name = "Name ";
  const email = "email";
  const userlevel = "staff"
  
  const handleLoginClick = () => {
    goToLogin();
  }

  
  const handleDashboardClick = () => {
    goToDashboard();  
  }

  return (
    <div className="profile">
      <div className="profile-container">
        <header className="profile-header">
          <div className="header-left">
            <h1 className="profile-title">Profile</h1>
          </div>
          <div className="header-right">
            <img src={icon} alt="Profile Icon" className="profile-icon" />
          </div>
        </header>
        
        <div className="profile-details">
          <div className="profile-item">
            <strong>Name:</strong>
            <p>{name}</p>
          </div>

          <div className="profile-item">
            <strong>Email:</strong>
            <p>{email}</p>
          </div>
          <div className="profile-item">
            <strong>User Level:</strong>
            <p>{userlevel}</p>
          </div>
        </div>

        <div className="profile-buttons">
          <button className="btn exit-btn" onClick={handleLoginClick}>Logout</button>
          <button className="btn dashboard-btn" onClick={handleDashboardClick}>Return to Dashboard</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
