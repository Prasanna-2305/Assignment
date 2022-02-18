import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
export default function Navbar(){
    return(
        <nav className='navbar'>
            <h3 className='logo'>Task</h3>
            <ul className='nav-links'>
              
              <Link to='/Page1' className='home1'>Page1</Link>  
              <Link to='/Page2' className='home2'>Page2</Link>
              <Link to='/Page3' className='home3'>Page3</Link>
            </ul>
        </nav>
    )
}