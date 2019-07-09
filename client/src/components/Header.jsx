import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className='headers'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/favorites'>Favorites</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
