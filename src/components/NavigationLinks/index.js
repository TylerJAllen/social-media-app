import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const NavigationLinks = () => {

  return (
    <ul className="nav-links">
      <li>
        <Link to='/'>
          <div>home</div>
        </Link>
      </li>
      <li>
        <Link to='#'>
          <div>Search</div>
        </Link>
      </li>
      <li>
        <Link to='#'>
          <div>News</div>
        </Link>
      </li>
      <li>
        <Link to='#'>
          <div>Groups</div>
        </Link>
      </li>
      <li>
        <Link to='#'>
          <div>Stats</div>
        </Link>
      </li>
    </ul>
  );
}

export default NavigationLinks;
