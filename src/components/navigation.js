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
                Página inicial
            </button>
            </Link>
            <Link to='/about'>
            <button className='Buttons'>
                Sobre
            </button>
            </Link>
            <Link to='/contact'>
            <button className='Buttons'>
                Contato
            </button>
            </Link>
        </div>
    );
  }
  
  export default NavigationBar;