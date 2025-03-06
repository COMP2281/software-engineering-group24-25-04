import React from "react";
import "./Target.css";

const TargetField = ({ id, label, value, onChange, isEditing, isCurrency }) => (
    <div className="target-field">
        <h2 className="target-text-2">{label}</h2>
        <div className="target-edit">
            {isEditing ? (
                <input
                    id={id}
                    type="text"
                    value={value}
                    onChange={(e) => onChange(id, e.target.value)}
                    placeholder={isCurrency ? "£" : ""}
                />
            ) : (
                <p id={id}>{value || "-"}</p>
            )}
        </div>
    </div>
);

export default TargetField;