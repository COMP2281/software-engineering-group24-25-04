import React from "react";
import "./Target.css";

const TargetDate = ({ id, label, value, onChange, isEditing }) => (
    <div className="target-edit-date">
        <h2 className="target-text-2">{label}</h2>
        {isEditing ? (
            <input id={id} type="date" value={value} onChange={(e) => onChange(id, e.target.value)} />
        ) : (
            <p id={id}>{value || "-"}</p>
        )}
    </div>
);

export default TargetDate;