import React from 'react';
import './styles.css';
import NavigationLinks from '../NavigationLinks';
import { Link } from 'react-router-dom';
import { auth, isAuthenticated } from "../../firebase.js";

class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      userId: null
    }
  }

  componentDidMount() {
    this.removeListener = auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ userId: user.uid });
      } else {
        this.setState({ userId: null });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  showUserAvatar = () => {
    if(isAuthenticated()){
      return (
        <Link to={`/user/${this.state.userId}`}>
          <div className="userAvatar">
            <img className='userAvatarImage' src='http://lorempixel.com/200/200/people' alt='avatar'/>
          </div>
        </Link>
      );
    }
  }

  showUserButtons = () => {
    if(isAuthenticated()){
      return (
        <div className="headerButtons">
          <button onClick={()=> auth.signOut()}>Log out</button>
          <button onClick={()=> this.props.showFormModal()}>+</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav-bar">
        {this.showUserAvatar()}
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
