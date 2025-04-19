import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import icon from '../Assets/icon.jpg';
import axios from 'axios';

const Dashboard = ({ userEmail, goToProfile, goToTarget }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [myTargets, setMyTargets] = useState([]);
  const [allTargets, setAllTargets] = useState([]);

  // Date filter states
  const [dateFilterType, setDateFilterType] = useState("All");
  const [customStartDate, setCustomStartDate] = useState("");
  const [customEndDate, setCustomEndDate] = useState("");

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

  const handleBoxClick = async (targetId, isMyTarget) => {
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
            goToTarget(userEmail, newTarget, true);

        } catch (error) {
            console.error("Error fetching targets:", error);
        }
    } else {
        // Fetch existing target as usual
        try {
            const numericTargetId = Number(targetId); // Convert to number
            const response = await axios.get(`http://localhost:4000/target/${numericTargetId}`);
            const targetData = response.data;

            // Check if this target belongs to the user
            const isMyTarget = myTargets.some(target => target["target-id"] === targetId);

            goToTarget(userEmail, targetData, isMyTarget);
        } catch (error) {
            console.error("Error fetching target data:", error);
        }
    }
  };

  const handleIconClick = () => {
    goToProfile(userEmail);
  };

  // Helper for date filtering
  const isWithinDateRange = (target, type) => {
    const dateField = target.otherFields?.find(field => field.id === "target-completion_date");
    if (!dateField || !dateField.value || dateField.value.toLowerCase() === "ongoing") return false;

    const date = new Date(dateField.value.split("-").reverse().join("-"));

    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay() + 1);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const endOfYear = new Date(today.getFullYear(), 11, 31);

    if (type === "Day") {
      return date.toDateString() === today.toDateString();
    } else if (type === "Week") {
      return date >= startOfWeek && date <= endOfWeek;
    } else if (type === "Month") {
      return date >= startOfMonth && date <= endOfMonth;
    } else if (type === "Year") {
      return date >= startOfYear && date <= endOfYear;
    } else if (type === "Custom") {
      if (!customStartDate || !customEndDate) return false;
      const start = new Date(customStartDate);
      const end = new Date(customEndDate);
      return date >= start && date <= end;
    }

    return true;
  };

  const filteredMyTargets = myTargets.filter(target => {
    if (!target?.fields) return false;
    const fieldValues = target.fields.map(field => field?.value?.toLowerCase() || "");
    const titleMatch = target?.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSearch = searchTerm === "" || titleMatch || 
                          fieldValues.some(value => value.includes(searchTerm.toLowerCase()));
    const matchesFilter = filter === "All" || 
                          target?.title?.toLowerCase() === filter.toLowerCase() || 
                          fieldValues.includes(filter.toLowerCase());
    const matchesDate = dateFilterType === "All" || isWithinDateRange(target, dateFilterType);                      
    return matchesSearch && matchesFilter && matchesDate;
});
  
  const filteredAllTargets = allTargets.filter(target => {
    const fieldValues = target.fields ? target.fields.map(field => field?.value?.toLowerCase() || "") : [];
    const matchesSearch = searchTerm === "" || 
                          target.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          fieldValues.some(value => value.includes(searchTerm.toLowerCase()));
    const matchesFilter = filter === "All" || 
                          target.title.toLowerCase() === filter.toLowerCase() || 
                          fieldValues.includes(filter.toLowerCase());                      
    const matchesDate = dateFilterType === "All" || isWithinDateRange(target, dateFilterType);
    return matchesSearch && matchesFilter && matchesDate;
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
          <h1>Staff Dashboard</h1>
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
                {filteredMyTargets.length === 0 && (
                  <p className="no-targets-message">No targets due within the selected period.</p>
                )}
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
              
              <div className="date-filter-container">
                <label>Filter by Completion Date:</label>
                <select
                  className="date-filter-dropdown"
                  value={dateFilterType}
                  onChange={(e) => setDateFilterType(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Day">Today</option>
                  <option value="Week">This Week</option>
                  <option value="Month">This Month</option>
                  <option value="Year">This Year</option>
                  <option value="Custom">Custom Range</option>
                </select>

                {dateFilterType === "Custom" && (
                  <div className="custom-date-range">
                    <input
                      type="date"
                      value={customStartDate}
                      onChange={(e) => setCustomStartDate(e.target.value)}
                    />
                    <input
                      type="date"
                      value={customEndDate}
                      onChange={(e) => setCustomEndDate(e.target.value)}
                    />
                  </div>
                )}
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
              {filteredAllTargets.length === 0 && (
                <p className="no-targets-message">No targets found for the selected filters.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;