import React from 'react';

const FavoriteEntry = ({ entry, handleRemove }) => {
  return (
    <div>
      <div className='row justify-content-md-center'>
        <h4 className='col'>Date: {entry.favorite.date}</h4>
        <div className='dropdown col-md-auto text-right'>
          <button
            className='dropbtn'
            onClick={() => {
              handleRemove(entry._id);
            }}
          >
            X
          </button>
        </div>
      </div>
      <h4>Description: {entry.favorite.description}</h4>
    </div>
  );
};

export default FavoriteEntry;
