import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import TargetField from "./TargetField";
import TargetDropdown from "./TargetDropdown";
import TargetDate from "./TargetDate";
import "./Target.css";

const Target = ({ userEmail, userRole, target, goToDashboard, goToManagerDashboard, goToTarget, isMyTarget, fromAdminDashboard }) => {
    const [action, setAction] = useState("View");
    const [showSaveButton, setShowSaveButton] = useState(false);
    const [showDeleteButton, setShowDeleteButton] = useState(false);
    const [formData, setFormData] = useState({});
    const [maxProgress, setMaxProgress] = useState(100);

    useEffect(() => {
        if (target) {
            const initialFormData = { title: target.title || "", progress: target.progress || 0 };
            (target.fields ?? []).forEach(field => {
                initialFormData[field.id] = field.value;
            });
            (target.costFields ?? []).forEach(field => {
                initialFormData[field.id] = field.value;
            });
            (target.otherFields ?? []).forEach(field => {
                initialFormData[field.id] = field.value;
            });
            setFormData(initialFormData);

            // Extract max progress from "Targets Set"
            const targetsSetField = target.fields?.find(field => field.id === 'target-targets_set');
            const total = extractTotal(targetsSetField?.value);
            setMaxProgress(total);

            if (isMyTarget || fromAdminDashboard) {
                setAction("Edit");
                setShowSaveButton(true);
                setShowDeleteButton(true);
            } else {
                setAction("View");
                setShowSaveButton(false);
                setShowDeleteButton(false);
            }
        }
    }, [target, fromAdminDashboard, isMyTarget]);

    const oppositeAction = action === "Edit" ? "View" : "Edit";

    const handleDashboardClick = () => {
        if (userRole === "manager") {
            goToManagerDashboard(userEmail);
        } else {
            goToDashboard(userEmail);
        }
    };

    const handleToggleActionClick = () => {
        if (action === "Edit") {
            setAction("View");
            setShowSaveButton(false);
            setShowDeleteButton(false);
        } else {
            setAction("Edit");
            setShowSaveButton(true);
            setShowDeleteButton(true);
        }
    };

    const handleSaveClick = async () => {
        try {
             if (!formData.title) {
            alert("Title required");
            return;
        }
            const newTargetData = {
                "target-id": target["target-id"] || null,
                "title": formData.title || "Target Heading",
                "fields": target.fields.map(field => ({
                    id: field.id,
                    label: field.label,
                    value: formData[field.id] || ""
                })),
                "costFields": target.costFields.map(field => ({
                    id: field.id,
                    label: field.label,
                    value: formData[field.id] || ""
                })),
                "otherFields": target.otherFields.map(field => ({
                    id: field.id,
                    label: field.label,
                    value: formData[field.id] || ""
                })),
                "progress": formData.progress || 0,
                "userEmail": userEmail
            };
    
            if (!newTargetData["target-id"]) {
                // If no target ID, fetch targets to get the next available ID
                const response = await axios.get("http://localhost:4000/targets");
                const targets = response.data;
                const highestId = targets.reduce((maxId, target) => Math.max(maxId, target["target-id"]), 0);
                newTargetData["target-id"] = parseInt(highestId + 1);
            }
    
            // Send a POST request (same API handles both edit & new target)
            await axios.post("http://localhost:4000/target", newTargetData);
    
            alert("Target saved successfully!");
            setShowSaveButton(false);
            setShowDeleteButton(false);
            setAction("View");
    
            // Redirect back to dashboard
            handleDashboardClick();
        } catch (error) {
            console.error("Error saving target:", error);
            alert("Failed to save target.");
        }
    };

    const handleDeleteClick = async () => {
        try {
            if (!target["target-id"]) {
                alert("Invalid target ID.");
                return;
            }
    
            const targetId = target["target-id"];

            if (!userEmail) {
                alert("User Email Missing");
                return;
            }
    
            // Confirm before deleting
            const confirmDelete = window.confirm("Are you sure you want to delete this target?");
            if (!confirmDelete) return;
    
            // Delete target from targets.json
            await axios.delete(`http://localhost:4000/target/${targetId}`);
    
            // Remove target from usertargets.json
            await axios.post("http://localhost:4000/remove-target", { targetId, userEmail });
    
            alert("Target deleted successfully!");
            
            // Redirect back to dashboard
            handleDashboardClick();
        } catch (error) {
            console.error("Error deleting target:", error);
            alert("Failed to delete target.");
        }
    };

    const handleChange = (id, value) => {
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    // For when the user changes the target title
    const handleTitleChange = (event) => {
        setFormData(prev => ({
            ...prev,
            title: event.target.value
        }));
    }

    // For when the user changes the progress
    const handleProgressChange = (event) => {
        const value = event.target.value; // Get the raw input value
        let parsedValue = parseInt(value, 10); // Try to parse it as an integer

        if (isNaN(parsedValue)) {
            // If parsing fails, it means the input is not a number
            if (value === "") {
                // Allow empty input
                setFormData(prev => ({
                    ...prev,
                    progress: value
                }));
            }
            return; // Exit the function, don't update the state
        }

        // If parsing succeeds, ensure the value is within the allowed range
        if (parsedValue > maxProgress) {
            parsedValue = maxProgress;
        }
        if (parsedValue < 0) {
            parsedValue = 0;
        }

        // Update the state with the parsed value
        setFormData(prev => ({
            ...prev,
            progress: parsedValue
        }));
    }

    const extractTotal = (str) => {
        if (!str) return 1; // Default to 1 if the string is empty or undefined
        const match = str.match(/\d+/);
        return match ? parseInt(match[0], 10) : 1; // Default to 1 if no numbers are found
    };

    return (
        <Container className="target-container">
            <div className="target-header">
                {action === "Edit" ? (
                    <input
                        type="text"
                        className="target-title-input stylish-input"
                        value={formData.title}
                        onChange={handleTitleChange}
                        placeholder="Enter target heading"
                    />
                ) : (
                    <h1 className="target-title">{formData.title || "Target Heading"}</h1>
                )}
                <div className="target-underline"></div>
            </div>
            <div className="target-inputs">
                {target.fields.map(({ id, label }) => (
                        <TargetField
                            key={id}
                            id={id}
                            label={label}
                            value={formData[id] || ""}
                            onChange={handleChange}
                            isEditing={action === "Edit"}
                            goToTarget={goToTarget}
                        />
                    ))}
                {target.costFields.map(({ id, label }) => (
                    <TargetField
                        key={id}
                        id={id}
                        label={label}
                        value={formData[id] || ""}
                        onChange={handleChange}
                        isEditing={action === "Edit"}
                        isCurrency
                        goToTarget={goToTarget}
                    />
                ))}
                <TargetDropdown
                    id="target-funding_secured"
                    label="Funding Secured"
                    options={["Yes", "No", "Invest to save"]}
                    value={formData["target-funding_secured"] || ""}
                    onChange={handleChange}
                    isEditing={action === "Edit"}
                />
                <TargetDropdown
                    id="target-sufficient_staff"
                    label="Sufficient Staff"
                    options={["Yes", "No", "Uncertain"]}
                    value={formData["target-sufficient_staff"] || ""}
                    onChange={handleChange}
                    isEditing={action === "Edit"}
                />
                <TargetDate
                    id="target-start_date"
                    label="Start Date"
                    value={formData["target-start_date"] || ""}
                    onChange={handleChange}
                    isEditing={action === "Edit"}
                />
                <TargetDate
                    id="target-completion_date"
                    label="Completion Date"
                    value={formData["target-completion_date"] || ""}
                    onChange={handleChange}
                    isEditing={action === "Edit"}
                />
                <div className="target-field target-progress">
                    <label htmlFor="progress" className="target-text-2">Progress Completed</label>
                    <div style={{ marginBottom: '15px' }}></div> 
                    {action === "Edit" ? (
                        <input
                            type="number"
                            id="progress"
                            value={formData.progress}
                            onChange={handleProgressChange}
                            className="stylish-input"
                            min="0"
                            max={maxProgress}
                        />
                    ) : (
                        <div className="target-view-text">{formData.progress}</div>
                    )}
                </div>
            </div>
            <div className="target-button-container">
                <div className="target-btn dashboard-btn" onClick={handleDashboardClick}>
                    Return to Dashboard
                </div>
                <button className="target-btn edit-btn" onClick={handleToggleActionClick} disabled={!isMyTarget} style={{cursor: isMyTarget ? "pointer" : "not-allowed", opacity: isMyTarget ? 1 : 0.5,}}>
                    {oppositeAction}
                </button>
                {showDeleteButton && (
                    <div className="target-btn delete-btn" onClick={handleDeleteClick}>
                        Delete
                    </div>
                )}
                {showSaveButton && (
                    <div className="target-btn save-btn" onClick={handleSaveClick}>
                        Save
                    </div>
                )}
            </div>
        </Container>
    );
};

export default Target;