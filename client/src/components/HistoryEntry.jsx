import React from 'react';

const HistoryEntry = ({ entry }) => {
  return (
    <div>
      <h4>Date: {entry.date}</h4>
      <h4>Description: {entry.description}</h4>
    </div>
  );
};

export default HistoryEntry;
