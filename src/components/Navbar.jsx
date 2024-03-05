import React from 'react'
import logo from '../assets/logo.svg';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav>
        <a href="/"><img src={logo} alt="logo" height="33" loading="lazy"/></a>
        <div id="menu-bar">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul id="menu-list">
          <li className="nav-link"><a href="/">Learning</a></li>
          <li className="nav-link"><a href="/">Community</a></li>
          <li className="nav-link"><a href="/">Outcomes</a></li>
          <li className="nav-link"><a href="/">ELEVATE</a></li>
          <li className="nav-link"><a href="/">For Teams</a></li>
          <li className="nav-link"><a href="/">Limited Experience</a></li>
          <li className="nav-link"><a href="/">Library</a></li>
          <li className="nav-link"><a href="/">CRAFTs</a></li>
          <li className="nav-link"><a href="/">Login</a></li>
        </ul>
        <button type="button" id="member-button">Become a Member</button>
      </nav>
    </>
  )
}

export default Navbar