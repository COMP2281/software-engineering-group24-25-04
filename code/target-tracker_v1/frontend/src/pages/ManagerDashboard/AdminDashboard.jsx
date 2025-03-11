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

  const fetchAssignedTargets = async (userEmail) => {
    
    try {
      const response = await axios.get(`http://localhost:4000/usertargets/${userEmail}`);
      setAssignedTargets(response.data);
    } catch (error) {
      console.error("Error fetching assigned targets:", error);
      setAssignedTargets([]);
  };
};

  const handleStaffChange = async (e) => {
    const userEmail = e.target.value;
    console.log(userEmail); 
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
                  <option key={target['target-id']} value={target.title}>
                    {target.title}
                  </option>
                ))}
              </select>
            </div>
            <button className="open-modal-button" onClick={() => setIsModalOpen(true)}>Open Window</button>
            <div className="target-boxes">
              {filteredAllTargets.map((target, index) => (
                <div key={index} className="target-box" onClick={() => handleBoxClick(target['target-id'])}>
                  {target.title}
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
      {isModalOpen && (
  <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h2>Assign Target</h2>
      
      <div className="modal-sections">
        <div className="modal-section">
          <h3>Targets</h3>
          <select 
            className="dropdown"
            value={selectedTarget}
            onChange={(e) => setSelectedTarget(e.target.value)}
          >
            <option value="">Select a target</option>
            {allTargets.map(target => (
                  <option key={target['target-id']} value={target['target-id']}>
                    {target.title}
                  </option>
                ))}
          </select>
        </div>

        <div className="modal-section">
          <h3>Staff</h3>
          <select 
            className="dropdown"
            value={selectedStaff}
            onChange={handleStaffChange}
          >
            <option value="">Select a staff member</option>
            {allUsers.map(user => (
              <option key={user.email} value={user.email}>
                {user.email}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="modal-usertarget-display">
        <h3>Assigned Targets for {selectedStaff}</h3>
        {assignedTargets.length > 0 ? (
          <ul>
            {assignedTargets.map((title, index) => (
              <li key={index}>{title}</li>
            ))}
          </ul>
        ) : (
           <p>No targets assigned.</p>
        )}
      </div>  
      
      <div className="modal-buttons">
        <button className="modal-action-button" onClick={handleConfirmSelection}>
          Confirm Selection
        </button>
        <button 
            className="remove-button" 
            onClick={handleRemoveTarget}
          >
            Remove Target
          </button>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </div>
      {message && <p className="success-message">{message}</p>}
    </div>
  </div>
)}



    </div>
  );
};

export default AdminDashboard;