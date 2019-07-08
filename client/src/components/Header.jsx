import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className='nav-wrapper'>
            <Link to='/' className='left brand-logo'>
              Home
            </Link>
            <ul className='right'>
              <li>
                <a>Favorites</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
