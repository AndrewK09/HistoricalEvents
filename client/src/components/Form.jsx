import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      query: e.target.value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    await this.props.handleOptions('query', this.state.query);
    this.setState({ query: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search by:
            <input
              type='text'
              name='query'
              value={this.state.query}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}
