import React, { useState } from 'react';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/Profile/Profile';
import Target from './Components/Target/Target';
import AdminDashboard from './pages/ManagerDashboard/AdminDashboard';


function App() {
  const [currentPage, setCurrentPage] = useState('loginSignup');
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [userRole, setUserRole] = useState("");
  const [target, setTarget] = useState("");

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
                  <LoginSignup goToDashboard={goToDashboard} goToManagerDashboard={goToManagerDashboard} />
              )}
              {currentPage === 'dashboard' && (
                  <Dashboard userEmail={userEmail} userId={userId} goToProfile={goToProfile} goToTarget={goToTarget} />
              )}
              {currentPage === 'admin' && (
                  <AdminDashboard userEmail={userEmail} userId={userId} goToProfile={goToProfile} goToTarget={goToTarget} />
              )}
              {currentPage === 'profile' && (
                  <Profile userEmail={userEmail} goToDashboard={goToDashboard} goToManagerDashboard={goToManagerDashboard} goToLogin={goToLogin} />
              )}
              {currentPage === 'target' && (
                  <Target userEmail={userEmail} target={target} goToDashboard={goToDashboard} goToManagerDashboard={goToManagerDashboard} />
              )}
          </div>
      </div>
  );
}

export default App;