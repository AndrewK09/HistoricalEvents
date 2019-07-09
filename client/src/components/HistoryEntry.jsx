import React, { Component } from 'react';

export default class HistoryEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      set: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {}

  handleClick(e) {
    e.preventDefault();
    console.log(this.props.entry);
  }

  handleNewSet() {
    let set = prompt('Enter new set');
    console.log(set);
    //add new set to db
    //update set
  }
  render() {
    const { entry } = this.props;
    return (
      <div>
        <div className='row justify-content-md-center'>
          <h4 className='col  '>Date: {entry.date}</h4>
          <div className='dropdown col-md-auto text-right'>
            <button className='dropbtn'>&#9734;</button>
            <div className='dropdown-content'>
              <a onClick={this.handleNewSet}>New Set</a>
              <a onClick={this.handleClick}>Link 2</a>
              <a onClick={this.handleClick}>Link 3</a>
            </div>
          </div>
        </div>
        <h4>Description: {entry.description}</h4>
      </div>
    );
  }
}
