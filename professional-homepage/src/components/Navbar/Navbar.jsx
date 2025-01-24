import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Toggles mobile menu
    if (isDropdownOpen) setDropdownOpen(false); // Ensures dropdown is closed
  };

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevents event bubbling
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="logo">Real Estate</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="dropdown">
          <button
            className="dropdown-toggle"
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen}
          >
            Documentation
          </button>
          <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
            <li>
              <Link to="/documentation/lease-agreement">Lease Agreement</Link>
            </li>
            <li>
              <Link to="/documentation/tenant-agreement">Tenant Agreement</Link>
            </li>
            <li>
              <Link to="/documentation/property-registration">
                Property Registration
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/contact-us">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
