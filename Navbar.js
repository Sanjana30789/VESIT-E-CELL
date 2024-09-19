import React from 'react'
import './Navbar.css';
import logo from '../assets/logo.png';
import {Link } from 'react-router-dom';


const navbar = () => {
  return (
    <nav>
      {/* <img src={logo} alt="E-Cell Vesit" className='logo'/> */}
      <ul>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link></li>
        <li><Link to="/team" style={{ color: 'white', textDecoration: 'none' }}>Team</Link></li>
        <li><Link to="/events" style={{ color: 'white', textDecoration: 'none' }}>Events</Link></li>
        <li><Link to="/gallery" style={{ color: 'white', textDecoration: 'none' }}>Gallery</Link></li>
        <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}><button className="btn">Contact Us</button></Link></li>
      </ul>
    </nav>
  )
}

export default navbar
