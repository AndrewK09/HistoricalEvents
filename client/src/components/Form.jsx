import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      category1: [],
      category2: [],
      selected1: '',
      selected2: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async updateCategories() {
    const res = await axios.get('http://localhost:3000/events');
    const mapped1 = res.data.map(entry => {
      return entry.category1;
    });
    const mapped2 = res.data.map(entry => {
      return entry.category2;
    });
    let unique1 = [...new Set(mapped1)];
    let unique2 = [...new Set(mapped2)];
    this.setState({ category1: unique1, category2: unique2 });
  }

  componentDidMount() {
    this.updateCategories();
  }

  handleChange(e) {
    e.preventDefault();
    this.setState(
      {
        query: e.target.value
      },
      () => console.log(this.state.query)
    );
  }

  async handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.query);
    await this.props.handleOptions('query', this.state.query);
    await this.setState({ query: '' });
  }

  async handleSelect(e) {
    e.preventDefault();
    const { name, value } = e.target;

    await this.setState({ [name]: value });
    await this.props.handleOptions(name, value);
    let category = name === 'selected1' ? 'category1' : 'category2';
    const res = await axios.get(
      `http://localhost:3000/events?${category}=${value}`
    );

    let otherCategory = name === 'selected1' ? 'category2' : 'category1';
    let mapped = res.data.map(entry => {
      return entry[otherCategory];
    });
    let unique = [...new Set(mapped)];
    this.setState({ [otherCategory]: unique });
  }

  async handleClick(e) {
    await this.setState({
      query: '',
      selected1: '',
      selected2: ''
    });
    await this.props.handleReset();
    this.updateCategories();
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
          <label className='category'>
            Category1:
            <select
              value={this.state.selected1}
              name='selected1'
              onChange={this.handleSelect}
            >
              <option value=''>No Filter</option>
              {this.state.category1.map(category => {
                return <option value={category}>{category}</option>;
              })}
            </select>
          </label>
          <label className='category'>
            Category2:
            <select
              value={this.state.selected2}
              name='selected2'
              onChange={this.handleSelect}
            >
              <option value=''>No Filter</option>
              {this.state.category2.map(category => {
                return <option value={category}>{category}</option>;
              })}
            </select>
          </label>
        </form>
        <button onClick={this.handleClick}>Reset</button>
      </div>
    );
  }
}
