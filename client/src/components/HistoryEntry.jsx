import React from 'react';

const HistoryEntry = ({ entry }) => {
  return (
    <div className='entry'>
      <h3>Date: {entry.date}</h3>
      <h3>Description: {entry.description}</h3>
    </div>
  );
};

export default HistoryEntry;
