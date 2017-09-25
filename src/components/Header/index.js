import React from 'react';
import './styles.css';
import Logo from '../../images/logo.png';
import SearchBar from '../SearchBar';

class Header extends React.Component {
  constructor(){
    super();
  }

  render() {
    var logoUrl = '../../images/logo.png';
    return (
      <div className="nav-bar">
        <img src={Logo} alt="logo" id="logo" />
        <SearchBar />
        <div className="nav-links">
          <button>Sign Up</button>
          <button>Log In</button>
        </div>
      </div>
    );
  }
}

export default Header;
