import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import icon from '../Assets/icon.jpg';
import axios from 'axios';

const Dashboard = ({ userEmail, goToProfile, goToTarget }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [myTargets, setMyTargets] = useState([]);
  const [allTargets, setAllTargets] = useState([]);
  
  useEffect(() => {
    const fetchTargets = async () => {
      try {
        // Fetch all targets
        const response = await axios.get('http://localhost:4000/targets');
        const targets = response.data;
        setAllTargets(targets);
  
        // Fetch user ID based on email
        const userResponse = await axios.get(`http://localhost:4000/user/${userEmail}`);
        const userId = userResponse.data.id; 
  
        // Fetch user targets using the user ID
        const userTargetsResponse = await axios.get('http://localhost:4000/usertargets');
        const userTargets = userTargetsResponse.data[userId] || []; // Ensure it's an array
  
        // Filter all targets to get the user's targets
        const myTargets = targets.filter(target => userTargets.includes(target['target-id']));
        setMyTargets(myTargets);
  
      } catch (error) {
        console.error("Error fetching targets:", error);
      }
    };
  
    fetchTargets();
  }, [userEmail]);

  const handleBoxClick = async (targetId) => {
    try {
      const response = await axios.get(`http://localhost:4000/target/${targetId}`);
      const targetData = response.data;
      goToTarget(userEmail, targetData);
    } catch (error) {
      console.error("Error fetching target data:", error);
    }
  };

  const handleIconClick = () => {
    goToProfile(userEmail);
  };

  const filteredMyTargets = myTargets.filter(target => 
    target.fields.some(field => field.value.toLowerCase().includes(searchTerm.toLowerCase())) && (filter === "All" || target.fields.some(field => field.value.includes(filter)))
  );

  const filteredAllTargets = allTargets.filter(target => 
    target.fields.some(field => field.value.toLowerCase().includes(searchTerm.toLowerCase())) && (filter === "All" || target.fields.some(field => field.value.includes(filter)))
  );

  const getProgressValue = (target) => {
    switch(target['target-id']) {
      case 1: return "30%";
      case 2: return "60%";
      case 3: return "80%";
      case 4: return "20%";
      case 5: return "50%";
      case 6: return "90%";
      default: return "0%";
    }
  };

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
                  <div key={index} className="target-box" onClick={() => handleBoxClick(target['target-id'])}>
                    {target.fields.find(field => field.id === 'target-smart_action_description').value}
                    <div className="progress-bar">
                      <div className="progress" style={{ width: getProgressValue(target) }}>
                        <span className="progress-text">{getProgressValue(target)}</span>
                      </div>
                    </div>
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
                  {allTargets.map(target => (
                    <option key={target['target-id']} value={target.fields.find(field => field.id === 'target-smart_action_description').value}>
                      {target.fields.find(field => field.id === 'target-smart_action_description').value}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="separator-line"></div>
          <div className="all-targets">
            <h2>All Targets</h2>
            <div className="target-boxes">
              {filteredAllTargets.map((target, index) => (
                <div key={index} className="target-box" onClick={() => handleBoxClick(target['target-id'])}>
                  {target.fields.find(field => field.id === 'target-smart_action_description').value}
                  <div className="progress-bar">
                    <div className="progress" style={{ width: getProgressValue(target) }}>
                      <span className="progress-text">{getProgressValue(target)}</span>
                    </div>
                  </div>
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