import React, { Component } from 'react';
import axios from 'axios';

export default class HistoryEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    //make axios post request to add new favorite
    //pass in user, setname, entry
    console.log(this.props.entry);
  }

  handleNewSet() {
    let set = prompt('Enter new set');
    console.log(set);
    //add new set to db
    //update set
  }
  render() {
    const { entry, sets } = this.props;
    return (
      <div>
        <div className='row justify-content-md-center'>
          <h4 className='col  '>Date: {entry.date}</h4>
          <div className='dropdown col-md-auto text-right'>
            <button className='dropbtn'>&#9734;</button>
            <div className='dropdown-content'>
              <a onClick={this.handleNewSet}>New Set</a>
              {sets.map(set => {
                return (
                  <a key={set._id} onClick={this.handleClick}>
                    {set.setname}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <h4>Description: {entry.description}</h4>
      </div>
    );
  }
}
