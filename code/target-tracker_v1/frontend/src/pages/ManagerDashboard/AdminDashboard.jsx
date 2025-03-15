import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import icon from '../../Components/Assets/icon.jpg';
import axios from 'axios';

const AdminDashboard = ({ userEmail, goToProfile, goToTarget }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [allTargets, setAllTargets] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTarget, setSelectedTarget] = useState("");
  const [selectedStaff, setSelectedStaff] = useState("");
  const [message, setMessage] = useState("");
  const [assignedTargets, setAssignedTargets] = useState([]);

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

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/user');
        const users = response.data;
        setAllUsers(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    
    fetchTargets();
    fetchUsers();
  }, []);

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
          goToTarget(userEmail, newTarget, true);

      } catch (error) {
          console.error("Error fetching targets:", error);
      }
  } else {
      try {
        const response = await axios.get(`http://localhost:4000/target/${targetId}`);
        const targetData = response.data;
        goToTarget(userEmail, targetData, true);
      } catch (error) {
        console.error("Error fetching target data:", error);
      }
    }
  };

  const handleIconClick = () => {
    goToProfile(userEmail);
  };

  const fetchAssignedTargets = async (userEmail) => {
    try {
      const response = await axios.get(`http://localhost:4000/usertargets/${userEmail}`);
      setAssignedTargets(response.data);
    } catch (error) {
      console.error("Error fetching assigned targets:", error);
      setAssignedTargets([]);
    }
  };

  const handleStaffChange = async (e) => {
    const userEmail = e.target.value;
    setSelectedStaff(userEmail);
    if (userEmail) {
      await fetchAssignedTargets(userEmail);
    }
  };

  const handleConfirmSelection = async () => {
    if (selectedTarget && selectedStaff) {
      try {
        await axios.post('http://localhost:4000/assign-target', {
          targetId: selectedTarget,
          userEmail: selectedStaff
        });
        setMessage("Assigned successfully");
        setTimeout(() => setMessage(""), 3000);
        await fetchAssignedTargets(selectedStaff);
      } catch (error) {
        console.error("Error assigning target:", error);
        setMessage("Failed to assign target.");
        setTimeout(() => setMessage(""), 3000);
      }
    } else {
      setMessage("Please select both a target and a staff member.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleRemoveTarget = async () => {
    try {
      await axios.post('http://localhost:4000/remove-target', {
        targetId: selectedTarget,
        userEmail: selectedStaff
      });
      setMessage("Target removed successfully");
      setTimeout(() => setMessage(""), 3000);
      await fetchAssignedTargets(selectedStaff);
    } catch (error) {
      console.error("Error removing target:", error);
      setMessage("Failed to remove target.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

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
                  <option key={target['target-id']} value={target.title}>
                    {target.title}
                  </option>
                ))}
              </select>
            </div>
            <button className="open-modal-button" onClick={() => setIsModalOpen(true)}>
            + Assign New Target
            </button>
            <div className="target-boxes">
              {filteredAllTargets.map((target, index) => (
                <div key={index} className="target-box" onClick={() => handleBoxClick(target['target-id'])}>
                  <h3>{target.title}</h3>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: getProgressPercentage(target) }}>
                      <span className="progress-text">{getProgressPercentage(target)}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="target-box plus-box" onClick={() => handleBoxClick("Add Target")}>
                +
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
         <div className="modal-content" onClick={(e) => e.stopPropagation()}>
         <h2 className="modal-title">Assign Target</h2>


      <div className="modal-sections">
        <div className="modal-section">
          <label htmlFor="target-select">Select Target:</label>
          <select
            id="target-select"
            className="dropdown"
            value={selectedTarget}
            onChange={(e) => setSelectedTarget(e.target.value)}
          >
            <option value="">Choose a target</option>
            {allTargets.map(target => (
              <option key={target['target-id']} value={target['target-id']}>
                {target.title}
              </option>
            ))}
          </select>
        </div>

        <div className="modal-section">
          <label htmlFor="staff-select">Select Staff:</label>
          <select
            id="staff-select"
            className="dropdown"
            value={selectedStaff}
            onChange={handleStaffChange}
          >
            <option value="">Choose a staff member</option>
            {allUsers.map(user => (
              <option key={user.email} value={user.email}>
                {user.email}
              </option>
            ))}
          </select>
        </div>
      </div>


      <div className="modal-usertarget-display">
        <h3>Assigned Targets for {selectedStaff || "Selected Staff"}</h3>
        <ul className="assigned-targets-list">
          {assignedTargets.length > 0 ? (
            assignedTargets.map((title, index) => <li key={index}>{title}</li>)
          ) : (
            <p className="no-targets">No targets assigned.</p>
          )}
        </ul>
      </div>  

      <div className="modal-buttons">
        <button className="modal-action-button confirm-btn" onClick={handleConfirmSelection}>
          Confirm Selection
        </button>
        <button className="modal-action-button remove-btn" onClick={handleRemoveTarget}>
          Remove Target
        </button>
        <button className="modal-action-button close-btn" onClick={() => setIsModalOpen(false)}>
          Close
        </button>
      </div>


      {message && <p className="success-message">{message}</p>}
     </div>
    </div>
    )}
    </div>
  );
};

export default AdminDashboard;