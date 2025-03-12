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
  }, [userEmail], allTargets);

  const handleBoxClick = async (targetId) => {
    if (targetId === "Add Target") {
        try {
            // Fetch the existing targets to determine the next ID
            const response = await axios.get("http://localhost:4000/targets");
            const targets = response.data;

            // Find the highest target-id and increment it
            const highestId = Math.max(...targets.map(target => parseInt(target["target-id"], 10) || 0), 0);
            const nextId = highestId + 1;

            // Define the new target with correct field types
            const newTarget = {
                "target-id": nextId.toString(), // Convert to string to match existing format
                "title": "New Target",
                "fields": [
                    { "id": "target-cerp3_action_type", "label": "CERP3 Action Type", "value": "" },
                    { "id": "target-smart_action_description", "label": "Smart Action Description", "value": "" },
                    { "id": "target-related_work_programme", "label": "Related Work Programme", "value": "" },
                    { "id": "target-action_type", "label": "Action Type", "value": "" },
                    { "id": "target-project_lead", "label": "Project Lead", "value": "" },
                    { "id": "target-progress_metric", "label": "Progress Metric", "value": "" },
                    { "id": "target-targets_set", "label": "Targets Set", "value": "", "numericValue": 0 },
                    { "id": "target-kpi", "label": "KPI", "value": "" },
                    { "id": "target-carbon_reduction", "label": "Carbon Reduction", "value": "" },
                    { "id": "target-potential_obstacles_and_solutions", "label": "Potential Obstacles and Solutions", "value": "" },
                    { "id": "target-governing_group", "label": "Governing Group", "value": "" }
                ],
                "costFields": [
                    { "id": "target-countywide_estimated_annual_saving", "label": "Countywide Estimated Annual Saving", "value": "" },
                    { "id": "target-actual_annual_saving", "label": "Actual Annual Saving", "value": "" },
                    { "id": "target-cost", "label": "Cost", "value": "" }
                ],
                "otherFields": [
                  { "id": "target-funding_secured", "label": "Funding Secured", "value": "No", "type": "dropdown", "options": ["Yes", "No", "Invest to Save"] },
                  { "id": "target-sufficient_staff", "label": "Sufficient Staff", "value": "No", "type": "dropdown", "options": ["Yes", "No", "Uncertain"] },
                  { "id": "target-start_date", "label": "Start Date", "value": "", "type": "date" },
                  { "id": "target-completion_date", "label": "Completion Date", "value": "", "type": "date" }
                ]
            };

            // Redirect user to Target.jsx with new target
            goToTarget(userEmail, newTarget);

        } catch (error) {
            console.error("Error fetching targets:", error);
        }
    } else {
        // Fetch existing target as usual
        try {
            const numericTargetId = Number(targetId); // Convert to number
            const response = await axios.get(`http://localhost:4000/target/${numericTargetId}`);
            const targetData = response.data;

            goToTarget(userEmail, targetData);
        } catch (error) {
            console.error("Error fetching target data:", error);
        }
    }
  };

  const handleIconClick = () => {
    goToProfile(userEmail);
  };

  const filteredMyTargets = myTargets.filter(target => {
    if (!target.fields) return false;
    const fieldValues = target.fields.map(field => field?.value?.toLowerCase() || "");
    const matchesSearch = fieldValues.some(value => value.includes(searchTerm.toLowerCase()));
    const matchesFilter = filter === "All" || fieldValues.some(value => value.toLowerCase() === filter.toLowerCase());
    return matchesSearch && matchesFilter;
  });
  
  const filteredAllTargets = allTargets.filter(target => {
    const fieldValues = target.fields ? target.fields.map(field => field?.value?.toLowerCase() || "") : [];
    const matchesSearch = searchTerm === "" || 
                          target.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          fieldValues.some(value => value.includes(searchTerm.toLowerCase()));
    const matchesFilter = filter === "All" || 
                          target.title.toLowerCase() === filter.toLowerCase() || 
                          fieldValues.includes(filter.toLowerCase());

    return matchesSearch && matchesFilter;
});

  // Helper to extract the total number from the "Targets Set" string.
  const extractTotal = (str) => {
    if (!str) return 1; // Default to 1 if the string is empty or undefined
    const match = str.match(/\d+/);
    return match ? parseInt(match[0], 10) : 1; // Default to 1 if no numbers are found
  };

  // Calculate the progress percentage for a target.
  const getProgressPercentage = (target) => {
    const targetsSetField = target.fields.find(field => field.id === 'target-targets_set');
    const total = extractTotal(targetsSetField?.value);
    const progress = target.progress || 0;
    return total > 0 ? `${Math.min((progress / total) * 100, 100).toFixed(2)}%` : "0.00%";
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
                {filteredMyTargets.map((target, index) => {
                  return (
                    <div 
                      key={index} 
                      className="target-box" 
                      onClick={() => handleBoxClick(target['target-id'])}
                    >
                      {target.title}
                      <div className="progress-bar">
                        <div className="progress" style={{ width: getProgressPercentage(target) }}>
                          <span className="progress-text">{getProgressPercentage(target)}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
                    <option 
                      key={target['target-id']} 
                      value={target.title}
                    >
                      {target.title}
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
              {filteredAllTargets.map((target, index) => {
                  return (
                    <div 
                      key={index} 
                      className="target-box" 
                      onClick={() => handleBoxClick(target['target-id'])}
                    >
                      {target.title}
                      <div className="progress-bar">
                        <div className="progress" style={{ width: getProgressPercentage(target) }}>
                          <span className="progress-text">{getProgressPercentage(target)}</span>
                        </div>
                      </div>
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;