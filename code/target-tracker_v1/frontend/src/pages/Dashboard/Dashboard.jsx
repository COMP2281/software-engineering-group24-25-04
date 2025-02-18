import React, { useState } from 'react';
import './Dashboard.css';
import icon from '../../Components/Assets/icon.jpg'

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleBoxClick = () => {
    console.log('Box Click')
  };

  const handleIconClick = () => {
    console.log('Icon Click')
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="dashboard-header-left">
          <h1>Admin's Dashboard -- Target Management</h1>
        </div>
        <div className="dashboard-header-right">
          <img 
            src={icon} 
            alt="Icon" 
            className="dashboard-icon" 
            onClick={handleIconClick}
          />
        </div>
      </header>
      
      <div className="dashboard-content">
        <div className="split-container">
          <div className="my-target">
            <div className="my-target-left">
              <h2>My Targets</h2>
              <div className="target-boxes">
                <div className="target-box" onClick={handleBoxClick}>
                  Target 1
                </div>
                <div className="target-box" onClick={() => handleBoxClick("Target 2")}>
                  Target 2
                </div>
                <div className="target-box" onClick={() => handleBoxClick("Target 3")}>
                  Target 3
                </div>
                <div className="target-box plus-box" onClick={() => handleBoxClick("Add Target")}>
                  +
                </div>
              </div>
            </div>
            <div className="my-target-right">
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="search-box"
              />
            </div>
          </div>

          <div className="separator-line"></div>
          <div className="all-targets">
            <h2>All Targets</h2>
            <div className="target-boxes">
              <div className="target-box" onClick={() => handleBoxClick("Target 4")}>
                Target 4
              </div>
              <div className="target-box" onClick={() => handleBoxClick("Target 5")}>
                Target 5
              </div>
              <div className="target-box" onClick={() => handleBoxClick("Target 6")}>
                Target 6
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
