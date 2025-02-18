import React, {useState} from 'react';
import './Target.css';

const Target = ({ goToDashboard }) => {

    
const [action, setAction] = useState("View");
const [showSaveButton, setShowSaveButton] = useState(false); 
const oppositeAction = action === "Edit" ? "View" : "Edit";

const handleDashboardClick = () => {
    goToDashboard();  
  }

const handleToggleActionClick = () => {
    if (action === "Edit") {
        setAction("View");
        setShowSaveButton(false);
    } else {
        setAction("Edit");
        setShowSaveButton(true);
    }
};

const handleSaveClick = () => {
    setShowSaveButton(false);
    setAction("View")
};

const fields = {
    "target-cerp3_action_type": "CERP3 Action Type",
    "target-smart_action_description": "Smart Action Description",
    "target-related_work_programme": "Related Work Programme",
    "target-action_type": "Action Type",
    "target-project_lead": "Project Lead",
    "target-progress_metric": "Progress Metric",
    "target-targets_set": "Targets Set",
    "target-kpi": "KPI",
    "target-carbon_reduction": "Baseline",
    "target-council_estimated_annual_saving": "Target",
    "target-potential_obstacles_and_solutions": "Potential Obstacles and Solutions",
    "target-governing_group": "Governing Group"
};

const costFields = {
    "target-countywide_estimated_annual_saving": "Estimated Annual Saving",
    "target-actual_annual_saving": "Actual Annual Saving",
    "target-cost": "Cost"
};

  return (
    <div className='target-container'>
        <div className='target-header'>
            <div className='target-text'>Target Heading</div> {/* Target heading Needed Here */}
            <div className='target-underline'></div>
        </div>
        <div className='target-inputs'>
                    {Object.entries(fields).map(([id, label]) => (
                        <div key={id}>
                            <h2 className='target-text-2'>{label}</h2>
                            <div className='target-edit'>
                                {action === "Edit" ? (
                                    <input id={id} type='text'/>
                                
                            ) : (
                                <p id={id}> {/* retrieve the information from the targets database here*/}</p>
                            )}
                            </div>
                        </div>
                    ))}
                    <div>
                        <div className='target-edit-saving-container'>
                            <div className='target-edit-saving-row'>
                                {Object.entries(costFields).slice(0, 2).map(([id, label]) => (
                                    <div key={id} className='target-edit-saving'>
                                        <h2 className='target-text-3'>{label}</h2>
                                        <div>
                                            {action === "Edit" ? (
                                                <input id={id} type='text' placeholder='£'/>
                                            ) : (
                                                <p id={id}> {/* retrieve the information from the targets database here*/}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='target-edit-saving'>
                                {Object.entries(costFields).slice(2).map(([id, label]) => (
                                    <div key={id}>
                                        <h2 className='target-text-3'>{label}</h2>
                                        <div>
                                            {action === "Edit" ? (
                                                <input id={id} type='text' placeholder='£'/>
                                            ) : (
                                                <p id={id}> {/* retrieve the information from the targets database here*/}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        
                        
                        <div className='target-edit-dropdown-container'>
                            <div className='target-edit-dropdown'>
                                <h2 className='target-text-2'>Funding Secured</h2>
                                <select id='target-funding_secured'>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                    <option value='invest_to_save'>Invest to save</option>
                                </select>
                            </div>
                                
                            <div className='target-edit-dropdown'>
                                <h2 className='target-text-2'>Sufficient Staff</h2>
                                <select id='target-sufficient_staff'>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                    <option value='invest_to_save'>Uncertain</option>
                                </select>
                              </div>
                        </div>

                        <div className='target-edit-date-container'>
                            <div className='target-edit-date'>
                                <h2 className='target-text-3'>Start Date</h2>
                                <input id='target-start_date' type='date'/>
                            </div>
                            <div className='target-edit-date'>
                                <h2 className='target-text-3'>Completion Date</h2>
                                <input id='target-completion_date' type='date'/>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            <div className="target-button-container">
                <div className="target-btn dashboard-btn" onClick={handleDashboardClick}>Return to Dashboard</div>
                <div className="target-btn edit-btn" onClick={handleToggleActionClick}>{oppositeAction}</div>
                {showSaveButton && (
                <div className="target-btn save-btn" onClick={handleSaveClick}>
                    Save
                </div>
            )}
            </div>
    </div>
    );
}

export default Target;


