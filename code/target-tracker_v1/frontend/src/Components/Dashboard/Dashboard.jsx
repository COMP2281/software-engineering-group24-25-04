import React, { useState } from 'react';
import './Dashboard.css';
import icon from '../Assets/icon.jpg';

const Dashboard = ({ userEmail, goToProfile, goToTarget }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const handleBoxClick = (target) => {
    goToTarget(target);
  };

  const handleIconClick = () => {
    goToProfile(userEmail);
  };


  const myTargets = ["Target 1", "Target 2", "Target 3"];
  const allTargets = ["Target 4", "Target 5", "Target 6"];
  
  const filteredMyTargets = myTargets.filter(target => 
    target.toLowerCase().includes(searchTerm.toLowerCase()) && (filter === "All" || target.includes(filter))
  );

  const filteredAllTargets = allTargets.filter(target => 
    target.toLowerCase().includes(searchTerm.toLowerCase()) && (filter === "All" || target.includes(filter))
  );

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="dashboard-header-left">
          <h1>Dashboard</h1>
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
                {filteredMyTargets.map((target, index) => (
                  <div key={index} className="target-box" onClick={() => handleBoxClick(target)}>
                    {target}
                  </div>
                ))}
                <div className="target-box plus-box" onClick={() => handleBoxClick("Add Target")}>
                  +
                </div>
              </div>
            </div>
            <div className="my-target-right">
              <div className="search-filter-container">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  className="search-box"
                />
                <select 
                  className="filter-dropdown"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Target 1">Target 1</option>
                  <option value="Target 2">Target 2</option>
                  <option value="Target 3">Target 3</option>
                  <option value="Target 4">Target 4</option>
                  <option value="Target 5">Target 5</option>
                  <option value="Target 6">Target 6</option>
                </select>
              </div>
            </div>
          </div>
          <div className="separator-line"></div>
          <div className="all-targets">
            <h2>All Targets</h2>
            <div className="target-boxes">
              {filteredAllTargets.map((target, index) => (
                <div key={index} className="target-box" onClick={() => handleBoxClick(target)}>
                  {target}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;