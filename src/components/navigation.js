import React from 'react';
import ReactDOM from 'react-dom/client';
import './navigation.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function NavigationBar() {
    return (
        <div className='TopBar'>
            <Link to="/">
                <button className='Buttons'>
                    About me
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
        </div>
    );
  }
  
  export default NavigationBar;