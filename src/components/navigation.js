import React from 'react';
import './navigation.css';
import { Link } from "react-router-dom";

function NavigationBar() {
    return (
        <div className='TopBar'>
            <Link to="/" >
                <button className='Buttons'>
                    Home
                </button>
            </Link>
            <Link to='/career'>
                <button className='Buttons'>
                    Career
                </button>
            </Link>
            <Link to='/projects'>
                <button className='Buttons'>
                    Projects
                </button>
            </Link>
            <Link to='/blog'>
                <button className='Buttons'>
                    Blog
                </button>
            </Link>
        </div>
    );
  }
  
  export default NavigationBar;