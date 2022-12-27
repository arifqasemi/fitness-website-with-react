import React from 'react'
import {BrowserRouter, Router,Link, Routes} from 'react-router-dom';
import './home.css';

const Navbar = () => {
  return (
   
    <div className='navbar'>
    <div className="large-menu">
    <img src='../images/logo.png' />
      <Link to='/' className='link'>Home</Link>
     <Link to='exercise' className='link'>Exercises  </Link>   
    </div>
     <div className="small-menu">
     <div className="logo">
      <img src='../images/logo.png' />
     </div>
     <div className="icon">
     <div className="hamburger"></div>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
     </div>
     </div>
    </div>
    
    
  )
}

export default Navbar
