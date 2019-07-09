import React, { Component } from 'react';
import axios from 'axios';

export default class HistoryEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
    this.handleNewSet = this.handleNewSet.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    axios.post('/api/favorites', {
      username: this.props.username,
      setname: e.target.name,
      favorite: this.props.entry
    });
  }

  async handleNewSet() {
    const { username, handleUpdate, entry: favorite } = this.props;
    let setname = prompt('Add to new set');
    await axios.post('/api/favorites', {
      username,
      setname,
      favorite
    });
    handleUpdate();
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
              <a onClick={this.handleNewSet}>Add to New Set</a>
              {sets.map(set => {
                return (
                  <a key={set} name={set} onClick={this.handleClick}>
                    {set}
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
