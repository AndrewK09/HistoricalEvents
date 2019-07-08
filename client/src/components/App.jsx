import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Header from './Header.jsx';
import HistoryList from './HistoryList.jsx';
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      page: 1,
      query: ''
    };
    this.updatePage = this.updatePage.bind(this);
    this.updateOptions = this.updateOptions.bind(this);
  }

  async updatePage() {
    const { page, query } = this.state;
    let q = `&q=${query}`;
    const res = await axios.get(
      `http://localhost:3000/events?_page=${page}${q}`
    );
    this.setState({ list: res.data });
  }

  async updateOptions(option, value) {
    await this.setState({ [option]: value });
    this.updatePage();
  }

  async componentDidMount() {
    this.updatePage();
  }

  render() {
    return (
      <div>
        <Router>
          <div className='container'>
            <Header />
            <Route
              exact
              path='/'
              render={props => (
                <HistoryList
                  {...props}
                  list={this.state.list}
                  handleOptions={this.updateOptions}
                />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}
