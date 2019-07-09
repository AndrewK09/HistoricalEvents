import React, { Component } from 'react';
import HistoryEntry from './HistoryEntry.jsx';
import Form from './Form.jsx';
import axios from 'axios';
export default class HistoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sets: []
    };
  }

  async componentDidMount() {
    const res = await axios.get('/sets');
    this.setState({ sets: res.data });
  }

  handleNewSet() {
    let set = prompt('Enter new set');
    console.log(set);
    //add new set to db
    //update set
  }

  render() {
    return (
      <div>
        <Form
          handleOptions={this.props.handleOptions}
          handleReset={this.props.handleReset}
          list={this.props.list}
        />
        {this.props.list.map(entry => {
          return (
            <div className='entry' key={entry.description}>
              <HistoryEntry entry={entry} sets={this.state.sets} />
            </div>
          );
        })}
      </div>
    );
  }
}
