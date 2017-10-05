import React from 'react';
import './styles.css';
import NavigationLinks from '../NavigationLinks';
import { Link } from 'react-router-dom';
import { auth, isAuthenticated } from "../../firebase.js";

class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      user: null,
      userId: null
    }
  }

  componentDidMount() {
    this.removeListener = auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({userId: user.uid, user});
        console.log(user.uid);
      } else {
        this.setState({userId: null, user: null});
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
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

  showUserAvatar = () => {
    if(isAuthenticated()){
      return (
        <div className="userAvatar">
        
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
