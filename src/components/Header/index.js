import React from 'react';
import './styles.css';
import NavigationLinks from '../NavigationLinks';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <div className="nav-bar">
        <div className="user-profile">

        </div>
        <div className="show-nav-links">
          <NavigationLinks />
        </div>
        <Link to='/'>
          <h1>Blitz</h1>
        </Link>
        <button onClick={this.props.showFormModal}>+</button>
      </div>
    );
  }
}

export default Header;
