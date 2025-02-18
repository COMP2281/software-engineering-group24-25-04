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
  return (
    <div className='target-container'>
        <div className='target-header'>
            <div className='target-text'>Target Heading</div> {/* Target heading Needed Here*/}
            <div className='target-underline'></div>
        </div>
        <div className='target-inputs'>
                    {action === "Edit" ? (
                    <div>
                        <div className='target-edit'>
                            <input id = "target-heading" type='text' placeholder='Target'/>
                        </div>
                        <div className='target-edit'>
                            <input id = "target-due" type='date' placeholder=''/>
                        </div>
                        <div className='target-edit'>
                            <input id = "target-heading" type='text' placeholder='Target'/>
                        </div>
                        <div className='target-edit'>
                            <input id = "target-heading" type='text' placeholder='Target'/>
                        </div>
                    </div>
                    ): action === "View" ? (
                        <div>
                           <div className='target-edit'>
                            <div id = "target-heading" type='text'>Target</div>
                        </div>
                        <div className='target-edit'>
                            <div id = "target-due" type='date'>Date</div>
                        </div>
                        <div className='target-edit'>
                            <div id = "target-heading" type='date'></div>
                        </div>
                        <div className='target-edit'>
                            <div id = "target-heading" type='text'></div>
                        </div>
                        </div> 
                        ): null}
        
                    

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


