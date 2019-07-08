import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

import Header from './Header.jsx';
import HistoryList from './HistoryList.jsx';
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      page: 1,
      query: '',
      sortBy: '',
      selected1: '',
      selected2: '',
      pageCount: 0
    };
    this.updatePage = this.updatePage.bind(this);
    this.updateOptions = this.updateOptions.bind(this);
    this.resetOptions = this.resetOptions.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  //======================================================================

  async handlePageClick(data) {
    let selected = data.selected;
    await this.setState({
      page: 1 + selected
    });
    this.updatePage();
  }

  //======================================================================

  async updatePage() {
    const { page, query, selected1, selected2 } = this.state;
    let q = `&q=${query}`;
    let cat1 = `&category1=${selected1}`;
    let cat2 = `&category2=${selected2}`;
    let url = `http://localhost:3000/events?_page=${page}${q}`;
    if (query) url += q;
    if (selected1) url += cat1;
    if (selected2) url += cat2;
    const res = await axios.get(url);
    this.setState({
      list: res.data,
      pageCount: Math.ceil(res.headers['x-total-count'] / 10)
    });
  }

  async updateOptions(option, value) {
    await this.setState({ [option]: value });
    this.updatePage();
  }

  async resetOptions() {
    await this.setState({
      query: '',
      sortBy: '',
      selected1: '',
      selected2: ''
    });
    this.updatePage();
  }

  async componentDidMount() {
    this.updatePage();
  }

  render() {
    return (
      <div className='container-fluid'>
        <Router>
          <div>
            <Header />
            <Route
              exact
              path='/'
              render={props => (
                <HistoryList
                  {...props}
                  list={this.state.list}
                  handleOptions={this.updateOptions}
                  handleReset={this.resetOptions}
                  pageCount={this.state.pageCount}
                  handlePageClick={this.handlePageClick}
                />
              )}
            />
            <ReactPaginate
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={4}
              onPageChange={this.handlePageClick}
              containerClassName={'pagination'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
              previousClassName={'page-link'}
              nextClassName={'page-link'}
            />
          </div>
        </Router>
      </div>
    );
  }
}
