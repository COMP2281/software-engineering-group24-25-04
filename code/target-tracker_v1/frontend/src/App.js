import React, { useState, useEffect } from 'react';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/Profile/Profile';
import Target from './Components/Target/Target';
import AdminDashboard from './pages/ManagerDashboard/AdminDashboard';

function App() {
  const [currentPage, setCurrentPage] = useState(localStorage.getItem('currentPage') || 'loginSignup');
  const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail') || "");
  const [userId, setUserId] = useState(localStorage.getItem('userId') || "");
  const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || "");
  const [target, setTarget] = useState(localStorage.getItem('target') ? JSON.parse(localStorage.getItem('target')) : "");
  const [isMyTarget, setIsMyTarget] = useState("");

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('userId', userId);
    localStorage.setItem('userRole', userRole);
    localStorage.setItem('target', JSON.stringify(target));
  }, [currentPage, userEmail, userId, userRole, target]);

  const goToDashboard = (email, id) => {
    setUserEmail(email);
    setUserId(id);
    setUserRole("user");
    setCurrentPage('dashboard');
  };

  const goToManagerDashboard = (email, id) => {
    setUserEmail(email);
    setUserId(id);
    setUserRole("manager");
    setCurrentPage('admin');
  }

  const goToLogin = () => {
    setCurrentPage('loginSignup');
  };

  const goToProfile = (email, id) => {
    setUserEmail(email);
    setUserId(id);
    setCurrentPage('profile');
  };

  const goToTarget = (email, target, isMyTarget) => {
    setIsMyTarget(isMyTarget);
    setUserEmail(email);
    setTarget(target);
    setCurrentPage('target');
  };

  return (
      <div>
          <div>
              {currentPage === 'loginSignup' && (
                  <LoginSignup goToDashboard={goToDashboard} goToManagerDashboard={goToManagerDashboard} />
              )}
              {currentPage === 'dashboard' && (
                  <Dashboard userEmail={userEmail} userId={userId} goToProfile={goToProfile} goToTarget={goToTarget} />
              )}
              {currentPage === 'admin' && (
                  <AdminDashboard userEmail={userEmail} userId={userId} goToProfile={goToProfile} goToTarget={goToTarget} />
              )}
              {currentPage === 'profile' && (
                  <Profile userEmail={userEmail} userRole={userRole} goToDashboard={goToDashboard} goToManagerDashboard={goToManagerDashboard} goToLogin={goToLogin} />
              )}
              {currentPage === 'target' && (
                  <Target userEmail={userEmail} isMyTarget={isMyTarget} userRole={userRole} target={target} goToDashboard={goToDashboard} goToManagerDashboard={goToManagerDashboard} />
              )}
          </div>
      </div>
  );
}

export default App;