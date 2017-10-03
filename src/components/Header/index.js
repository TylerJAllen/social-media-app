import React from 'react';
import './styles.css';
import NavigationLinks from '../NavigationLinks';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  showUserButtons = () => {
    if(this.props.userIsSignedIn){
      return (
        <div className="header-buttons">
          <button onClick={this.props.logOut}>Log out</button>
          <button onClick={this.props.showFormModal}>+</button>
        </div>
      );
    }
  }

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
        {this.showUserButtons()}
      </div>
    );
  }
}

export default Header;
