import React, { useState } from 'react';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/Profile/Profile';
import Target from './Components/Target/Target';

function App() {
  const [currentPage, setCurrentPage] = useState('loginSignup');
  const [userEmail, setUserEmail] = useState("");
  const [target, setTarget] = useState("");

  const goToDashboard = (email) => {
    setUserEmail(email);
    setCurrentPage('dashboard');
  };

  const goToLogin = () => {
    setCurrentPage('loginSignup');
  };

  const goToProfile = (email) => {
    setUserEmail(email);
    setCurrentPage('profile');
  };

  const goToTarget = (email, target) => {
    setUserEmail(email);
    setTarget(target);
    setCurrentPage('target');
  };

  return (
      <div>
          <div>
              {currentPage === 'loginSignup' && (
                  <LoginSignup goToDashboard={goToDashboard} />
              )}
              {currentPage === 'dashboard' && (
                  <Dashboard userEmail={userEmail} goToProfile={goToProfile} goToTarget={goToTarget} />
              )}
              {currentPage === 'profile' && (
                  <Profile userEmail={userEmail} goToDashboard={goToDashboard} goToLogin={goToLogin} />
              )}
              {currentPage === 'target' && (
                  <Target userEmail={userEmail} goToDashboard={goToDashboard} />
              )}
          </div>
      </div>
);
}

export default App;