import React, { useState } from 'react';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/Profile/Profile';
import Target from './Components/Target/Target';

function App() {
  const [currentPage, setCurrentPage] = useState('loginSignup');

  const goToDashboard = () => {
    setCurrentPage('dashboard');
  };

  const goToLogin = () => {
    setCurrentPage('loginSignup');
  };

  const goToProfile = () => {
    setCurrentPage('profile');
  };

  const goToTarget = () => {
    setCurrentPage('target');
  };

  return (
    <div>
    {currentPage === 'loginSignup' && (
      <LoginSignup goToDashboard={goToDashboard} />
    )}
    {currentPage === 'dashboard' && (
      <Dashboard goToProfile={goToProfile} goToTarget={goToTarget} />
    )}
    {currentPage === 'profile' && (
      <Profile goToDashboard={goToDashboard} goToLogin={goToLogin} />
    )}
    {currentPage === 'target' && (
      <Target goToDashboard={goToDashboard} />
    )}
  </div>
);
}

export default App;