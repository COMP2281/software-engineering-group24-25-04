import React, { useState, useEffect } from 'react';
import icon from '../Assets/icon.jpg';
import './Profile.css';
import { getUserInfo } from './ProfileInfo';

const Profile = ({ userEmail, userRole, goToLogin, goToDashboard, goToManagerDashboard }) => {
  const [info, setInfo] = useState(null); // State to store user info
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        setLoading(true); // Start loading
        const userInfo = await getUserInfo(userEmail); // Fetch user info
        console.log('User Info:', userInfo);
        setInfo(userInfo); // Update state with user info
      } catch (err) {
        console.error('Error fetching user info:', err);
        setError('Failed to load user info'); // Set error message
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchUserInfo(); // Call the function when the component mounts
  }, [userEmail]); // Only runs if userEmail changes

  const handleLoginClick = () => {
    goToLogin();
  };

  const handleDashboardClick = () => {
    if (userRole === 'manager') {
      goToManagerDashboard(userEmail);
    } else {
      goToDashboard(userEmail);
    }
  };

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
          {loading ? (
            <p>Loading user info...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <>
              <div className="profile-item">
                <strong>Name:</strong>
                <p>{info.name}</p>
              </div>
              <div className="profile-item">
                <strong>Email:</strong>
                <p>{userEmail}</p>
              </div>
              <div className="profile-item">
                <strong>User Level:</strong>
                <p>{info.role}</p>
              </div>
            </>
          )}
        </div>

        <div className="profile-buttons">
          <button className="btn exit-btn" onClick={handleLoginClick}>
            Logout
          </button>
          <button className="btn dashboard-btn" onClick={handleDashboardClick}>
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
