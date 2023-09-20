import React, { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
    setIsHamburgerOpen(false); // Close the hamburger dropdown
  }

  const toggleHamburger = () => {
    setIsHamburgerOpen(prevState => !prevState);
    setIsDropdownOpen(false); // Close the other dropdown
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if ((isDropdownOpen || isHamburgerOpen) && !event.target.closest('.dropdown')) {
        setIsDropdownOpen(false);
        setIsHamburgerOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [isDropdownOpen, isHamburgerOpen]);

  return (
    <header className='navbar-header'>
      <nav className='navbar'>
        <div className="navbar-left">
          <div className="dropdown">
            <div className="hamburger-icon" onClick={toggleHamburger}>
              &#9776;
            </div>
            {isHamburgerOpen && (
              <div className="hamburger-dropdown show">
                <a className='home-btn' href="/home">Home</a>
                <div className="promotions-container">
                    <a href="/organization">Promotions</a>
                    <a href="/AEW">AEW</a>
                    <a href="/WWE">WWE</a>
                    <a href="/UFC">UFC</a>
                </div>
              </div>
            )}
          </div>
          <div className="logo-image">Logo</div>
          <div className="logo-name">Company</div>
        </div>
        <div className="navbar-middle">Search bar here</div>
        <div className="navbar-right">
          <div className="login">Login</div>
          <div className="dropdown" onClick={toggleDropdown}>
            <div className="dropdown-toggle dropdown-btn">&#8226;&#8226;&#8226;</div>
            <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
              <a href="Something">#icon Login/Sign up</a>
              <a href="Something">Option 2</a>
              <a href="Something">Option 3</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;
