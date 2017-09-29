import React from 'react';
import './styles.css';
import Logo from '../../images/logo.png';
import SearchBar from '../SearchBar';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    var logoUrl = '../../images/logo.png';
    return (
      <div className="nav-bar">
        {/*<img src={} alt="logo" id="logo" />*/}
        <h1>Blitz</h1>
        {/*<SearchBar />*/}
        <div className="nav-links">
          {/*<button>Sign Up</button>*/}
          {/*<button>Log In</button>*/}
          <button onClick={() => this.props.addNewPost()}>+</button>
        </div>
      </div>
    );
  }
}

export default Header;
