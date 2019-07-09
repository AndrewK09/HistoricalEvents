import React, { Component } from 'react';
import HistoryEntry from './HistoryEntry.jsx';
import Form from './Form.jsx';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
export default class HistoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sets: []
    };
    this.updateSets = this.updateSets.bind(this);
  }

  async updateSets() {
    const res = await axios.get('/api/sets');
    this.setState({ sets: res.data });
  }

  componentDidMount() {
    this.updateSets();
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
              <HistoryEntry
                entry={entry}
                sets={this.state.sets}
                handleUpdate={this.updateSets}
                username={this.props.username}
              />
            </div>
          );
        })}
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.props.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={4}
          onPageChange={this.props.handlePageClick}
          containerClassName={'pagination'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-link'}
          nextClassName={'page-link'}
        />
      </div>
    );
  }
}
