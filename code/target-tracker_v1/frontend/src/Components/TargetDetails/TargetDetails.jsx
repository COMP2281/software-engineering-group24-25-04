import React from 'react';
import { useLocation } from 'react-router-dom';

const TargetDetails = () => {
  const { state } = useLocation();
  const { target } = state;

  return (
    <div className="target-details">
      <h1>Target Details</h1>
      <pre>{JSON.stringify(target, null, 2)}</pre>
    </div>
  );
};

export default TargetDetails;
