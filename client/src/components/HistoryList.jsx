import React, { Component } from 'react';
import HistoryEntry from './HistoryEntry.jsx';
import Form from './Form.jsx';
export default class HistoryList extends Component {
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
              <HistoryEntry entry={entry} />
            </div>
          );
        })}
      </div>
    );
  }
}
