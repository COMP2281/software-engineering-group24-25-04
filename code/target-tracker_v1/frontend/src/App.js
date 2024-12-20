import React, { useState } from 'react';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/Profile/Profile';

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

  return (
    <div>
    {currentPage === 'loginSignup' && (
      <LoginSignup goToDashboard={goToDashboard} />
    )}
    {currentPage === 'dashboard' && (
      <Dashboard goToProfile={goToProfile} />
    )}
    {currentPage === 'profile' && (
      <Profile goToDashboard={goToDashboard} goToLogin={goToLogin} />
    )}
  </div>
);
}

export default App;