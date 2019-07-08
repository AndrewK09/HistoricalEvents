import React, { Component } from 'react';
import HistoryEntry from './HistoryEntry.jsx';
import Form from './Form.jsx';
export default class HistoryList extends Component {
  render() {
    return (
      <div>
        <Form handleOptions={this.props.handleOptions} />
        {this.props.list.map(entry => {
          return <HistoryEntry key={entry.description} entry={entry} />;
        })}
      </div>
    );
  }
}
