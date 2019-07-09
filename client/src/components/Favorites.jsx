import React, { Component } from 'react';
import axios from 'axios';

import FavoriteEntry from './FavoriteEntry.jsx';
export default class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: [],
      sets: [],
      setname: ''
    };
    this.updateFavorites = this.updateFavorites.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
  }

  async updateFavorites() {
    const res = await axios.get('/api/favorites');
    this.setState({ favorites: res.data });
  }

  async componentDidMount() {
    await this.updateFavorites();
    const res = await axios.get('/api/sets');
    this.setState({ sets: res.data });
  }

  async handleSelect(e) {
    await this.setState({ setname: e.target.value });
  }

  async removeFavorite(_id) {
    await axios.delete('/api/favorites', { _id });
    this.updateFavorites();
  }

  renderView() {
    if (this.state.setname.length > 0) {
      return this.state.favorites
        .filter(entry => {
          return entry.setname === this.state.setname;
        })
        .map(entry => {
          return (
            <div className='entry'>
              <FavoriteEntry entry={entry} handleRemove={this.removeFavorite} />
            </div>
          );
        });
    } else {
      return this.state.favorites.map(entry => {
        return (
          <div className='entry'>
            <FavoriteEntry entry={entry} handleRemove={this.removeFavorite} />
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <div className='sets'>
          <form>
            <label>
              Set:
              <select value={this.state.setname} onChange={this.handleSelect}>
                <option value=''>All sets</option>
                {this.state.sets.map(set => {
                  return (
                    <option key={set} value={set}>
                      {set}
                    </option>
                  );
                })}
              </select>
            </label>
          </form>
        </div>
        <div>{this.renderView()}</div>
      </div>
    );
  }
}
