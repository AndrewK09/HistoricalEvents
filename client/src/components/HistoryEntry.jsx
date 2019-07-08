import React from 'react';

const HistoryEntry = ({ entry }) => {
  return (
    <div className='entry'>
      <h6>Date: {entry.date}</h6>
      <h6>Description: {entry.description}</h6>
    </div>
  );
};

export default HistoryEntry;
