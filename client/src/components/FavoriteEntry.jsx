import React from 'react';

const FavoriteEntry = ({ entry, handleRemove }) => {
  return (
    <div>
      <div className='row justify-content-md-center'>
        <h4 className='col'>Date: {entry.favorite.date}</h4>
        <button
          className='col-md-auto text-right'
          onClick={() => {
            handleRemove(entry._id);
          }}
        >
          X
        </button>
      </div>

      <h4>Description: {entry.favorite.description}</h4>
    </div>
  );
};

export default FavoriteEntry;
