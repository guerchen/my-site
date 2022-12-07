import React from 'react';
import './navigation.css';
import { Link } from "react-router-dom";

function NavigationBar() {
    return (
        <div className='TopBar'>
            <Link to="/" className='Buttons'>
                Home
            </Link>
            <Link to='/career' className='Buttons'>
                Career
            </Link>
            <Link to='/projects' className='Buttons'>
                Projects
            </Link>
            <Link to='/blog' className='Buttons'>
                Blog
            </Link>
        </div>
    );
  }
  
  export default NavigationBar;