import React from "react";
import "./Target.css";

const TargetDropdown = ({ id, label, options, value, onChange, isEditing }) => (
    <div className="target-edit-dropdown">
        <h2 className="target-text-2">{label}</h2>
        {isEditing ? (
            <select id={id} value={value} onChange={(e) => onChange(id, e.target.value)}>
                {options.map((option) => (
                    <option key={option} value={option.toLowerCase()}>
                        {option}
                    </option>
                ))}
            </select>
        ) : (
            <p id={id}>{value || "-"}</p>
        )}
    </div>
);

export default TargetDropdown;