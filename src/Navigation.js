import React from 'react';
import './App.css';
// Custom
import {Link} from 'react-router-dom';

function Navigation() {

  const navStyle = {
    color: "white"
  };

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/home"><li>Home</li></Link>
        <Link style={navStyle} to="/about"><li>About</li></Link>
        <Link style={navStyle} to="/gallery"><li>Gallery</li></Link>
      </ul>
    </nav>
  );
}

export default Navigation;
