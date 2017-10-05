import React from 'react';
import './styles.css';
import NavigationLinks from '../NavigationLinks';
import { Link } from 'react-router-dom';
import { auth } from "../../firebase.js";

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
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  showUserButtons = () => {
    if(this.state.userId){
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
