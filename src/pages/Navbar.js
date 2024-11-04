import React from 'react';
import './navbar.css'; // Import the CSS file for the navbar

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo"></div> {/* Logo section */}
      <ul>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Signup</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
