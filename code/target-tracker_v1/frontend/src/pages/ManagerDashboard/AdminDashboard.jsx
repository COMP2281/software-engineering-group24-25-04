import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import icon from '../../Components/Assets/icon.jpg';
import axios from 'axios';

const AdminDashboard = ({ userEmail, goToProfile, goToTarget }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [allTargets, setAllTargets] = useState([]);

  useEffect(() => {
    const fetchTargets = async () => {
      try {
        const response = await axios.get('http://localhost:4000/targets');
        const targets = response.data;
        setAllTargets(targets);
      } catch (error) {
        console.error("Error fetching targets:", error);
      }
    };

    fetchTargets();
  }, []);

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

  const filteredAllTargets = allTargets.filter(target => {
    if (!target.fields) return false; // Ensure fields exist
  
    const fieldValues = target.fields.map(field => field?.value?.toLowerCase() || ""); // Extract values safely
    const matchesSearch = fieldValues.some(value => value.includes(searchTerm.toLowerCase()));
  
    // Fix: Match exact filter instead of `includes`
    const matchesFilter = filter === "All" || 
      fieldValues.some(value => value.toLowerCase() === filter.toLowerCase());
  
    return matchesSearch && matchesFilter;
  });

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
          <h1>Welcome to Admin's Dashboard -- Target Management</h1>
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
          <div className="all-targets">
            <h2>All Targets</h2>
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

export default AdminDashboard;