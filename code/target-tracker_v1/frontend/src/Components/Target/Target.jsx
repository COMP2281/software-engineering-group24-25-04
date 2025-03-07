import React, { useState } from "react";
import { Container } from "react-bootstrap";
import TargetField from "./TargetField";
import TargetDropdown from "./TargetDropdown";
import TargetDate from "./TargetDate";
import "./Target.css";
import targetData from "../../data/targetData.json";

const Target = ({ goToDashboard }) => {
    const [action, setAction] = useState("View");
    const [showSaveButton, setShowSaveButton] = useState(false);
    const [formData, setFormData] = useState({});

    const oppositeAction = action === "Edit" ? "View" : "Edit";

    const handleDashboardClick = () => {
        goToDashboard();
    };

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
        setAction("View");
    };

    const handleChange = (id, value) => {
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    return (
        <Container className="target-container">
            <div className="target-header">
                <div className="target-text">Target Heading</div>
                <div className="target-underline"></div>
            </div>
            <div className="target-inputs">
                {targetData.fields.map(({ id, label }) => (
                    <TargetField
                        key={id}
                        id={id}
                        label={label}
                        value={formData[id] || ""}
                        onChange={handleChange}
                        isEditing={action === "Edit"}
                    />
                ))}
                {targetData.costFields.map(({ id, label }) => (
                    <TargetField
                        key={id}
                        id={id}
                        label={label}
                        value={formData[id] || ""}
                        onChange={handleChange}
                        isEditing={action === "Edit"}
                        isCurrency
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
            </div>
            <div className="target-button-container">
                <div className="target-btn dashboard-btn" onClick={handleDashboardClick}>
                    Return to Dashboard
                </div>
                <div className="target-btn edit-btn" onClick={handleToggleActionClick}>
                    {oppositeAction}
                </div>
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